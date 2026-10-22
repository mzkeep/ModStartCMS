window._rootWindow = MS.util.getRootWindow();
window._pageTabManager = {
    closeFromTab: function () {
        if (window == parent.window) {
            return
        }
        var tabPageId = window.frameElement.getAttribute("data-tab-page")
        window.parent._pageTabManager.close(tabPageId)
    },
    updateTitleFromTab: function (title) {
        if (!title) {
            return
        }
        if (window == parent.window) {
            return
        }
        var tabPageId = window.frameElement.getAttribute("data-tab-page")
        window.parent._pageTabManager.updateTitle(tabPageId, title)
    },
    activeUrl: function (url) {
        var $menu = _rootWindow.$('.ub-panel-frame .left .menu');
        var normalUrl = _rootWindow._pageTabManager.normalTabUrl(url);
        $menu.find('a').each(function (i, o) {
            var url = $(o).attr('href');
            if (url === 'javascript:;') {
                return;
            }
            if (_rootWindow._pageTabManager.normalTabUrl(url) === normalUrl) {
                //console.log('activeUrl', url)
                $(o).parents('.children').prev().addClass('open');
                $menu.find('.menu-item').removeClass('active');
                $(o).closest('.menu-item').addClass('active');
                $(o).parents('.menu-item').addClass('active');
                try {
                    o.scrollIntoView({block: 'center', behavior: 'smooth'});
                } catch (e) {
                }
            }
        });
    },
    blurUrl: function (url) {
        var $menu = _rootWindow.$('.ub-panel-frame .left .menu');
        var normalUrl = _rootWindow._pageTabManager.normalTabUrl(url);
        $menu.find('a').each(function (i, o) {
            var url = $(o).attr('href');
            if (url === 'javascript:;') {
                return;
            }
            if (_rootWindow._pageTabManager.normalTabUrl(url) === normalUrl) {
                $(o).parents('.menu-item').removeClass('active');
            }
        });
    }
};

$(window).on('load', function () {

    /**
     * 修复部分依赖窗口滚动时间的组件（ueditor顶部悬浮工具栏)
     */
    $('.ub-panel-frame > .right > .content.fixed, .ub-panel-dialog .panel-dialog-body').scroll(function () {
        var evt = document.createEvent('HTMLEvents');
        evt.initEvent('scroll', false, true);
        window.dispatchEvent(evt);
    });

    // 与 CSS 的抽屉断点保持严格一致（50rem = 800px），避免 600-800px 打开抽屉后无法关闭
    var isMobile = window.matchMedia && window.matchMedia('(max-width: 50rem)').matches;
    var $frame = $('.ub-panel-frame');

    var updateLeftTriggerState = function () {
        $frame.find('.left-trigger').attr('aria-expanded', $frame.hasClass('left-toggle') ? 'true' : 'false');
    };

    // 抽屉遮罩关闭（移动端）：不分断点绑定，避免 600-800px 无处理器
    $frame.find('.left-menu-shrink').on('click', function () {
        $frame.removeClass('left-toggle');
        updateLeftTriggerState();
    });

    // 左侧菜单收起或展开
    if (isMobile) {
        $frame.find('.left-trigger').on('click', function () {
            $frame.toggleClass('left-toggle');
            updateLeftTriggerState();
        });
    } else {
        var menuHoverTimer = null;
        var $leftMenu = $frame.find('.left');
        // 收起态 hover 时延迟 300ms 临时展开（覆盖式，内容区不动），移开立即收回；点击 pin 才真正切换持久状态
        $leftMenu.on('mouseenter', function () {
            if (!$frame.hasClass('left-toggle')) {
                return;
            }
            clearTimeout(menuHoverTimer);
            menuHoverTimer = setTimeout(function () {
                $frame.addClass('left-hover');
            }, 300);
        });
        $leftMenu.on('mouseleave', function () {
            clearTimeout(menuHoverTimer);
            $frame.removeClass('left-hover');
        });
        $frame.find('.left-trigger').on('click', function () {
            clearTimeout(menuHoverTimer);
            $frame.removeClass('left-hover');
            $frame.toggleClass('left-toggle');
            updateLeftTriggerState();
            window.api.base.postSuccess(
                window.__msAdminRoot + "util/frame",
                {frameLeftToggle: $frame.is('.left-toggle')},
                function (res) {
                }
            );
        });
    }
    updateLeftTriggerState();

    // 移动端右侧快捷操作：点击 toggle，外点/Esc 关闭
    var $rightMenuTrigger = $frame.find('.right-menu-trigger');
    $rightMenuTrigger.on('click', function () {
        var open = !$frame.hasClass('right-menu-open');
        $frame.toggleClass('right-menu-open', open);
        $rightMenuTrigger.attr('aria-expanded', open ? 'true' : 'false');
        return false;
    });
    var closeRightMenu = function () {
        $frame.removeClass('right-menu-open');
        $rightMenuTrigger.attr('aria-expanded', 'false');
    };
    $(document).on('mousedown', function (e) {
        if ($frame.hasClass('right-menu-open') && !$(e.target).closest('.menu-right, .right-menu-trigger').length) {
            closeRightMenu();
        }
    });
    $(document).on('keydown', function (e) {
        if (e.key === 'Escape') {
            if ($frame.hasClass('right-menu-open')) {
                closeRightMenu();
            } else if (isMobile && $frame.hasClass('left-toggle')) {
                $frame.removeClass('left-toggle');
                updateLeftTriggerState();
            }
        }
    });

    // 后台菜单搜索（顶栏图标 + 浮层结果面板，支持 Cmd/Ctrl + K）
    var $menu = $frame.find('.left .menu');
    var $searchPanel = $('#adminSearchPanel');
    var $searchInput = $('#adminSearchInput');
    var $searchList = $('#adminSearchList');
    var $searchTrigger = $('#adminSearchTrigger');
    var searchItems = [];
    var searchVisibleItems = [];
    var searchActiveIndex = 0;

    var buildSearchItems = function () {
        searchItems = [];
        $menu.find('a[href]').each(function () {
            var $link = $(this);
            var href = $link.attr('href');
            if (!href || href === 'javascript:;' || $link.is('[data-tab-menu-ignore]')) {
                return;
            }
            var title = $.trim($link.children('.text').first().text());
            if (!title) {
                return;
            }
            var paths = [];
            $link.closest('.menu-item').parents('.menu-item').each(function () {
                var text = $.trim($(this).children('.title').first().children('.text').first().text());
                if (text) {
                    paths.unshift(text);
                }
            });
            searchItems.push({
                title: title,
                path: paths.join(' / '),
                $link: $link,
            });
        });
    };

    var highlightText = function (text, indexs) {
        var $result = $('<span class="admin-search-item-title"></span>');
        if (!indexs) {
            return $result.text(text);
        }
        $result.append(document.createTextNode(text.substring(0, indexs[0])));
        $result.append($('<mark></mark>').text(text.substring(indexs[0], indexs[1] + 1)));
        $result.append(document.createTextNode(text.substring(indexs[1] + 1)));
        return $result;
    };

    var findMatch = function (text, keywords) {
        if (!keywords) {
            return [0, -1];
        }
        if (window.PinyinMatch) {
            return PinyinMatch.match(text, keywords);
        }
        var index = text.toLowerCase().indexOf(keywords.toLowerCase());
        return index >= 0 ? [index, index + keywords.length - 1] : false;
    };

    var openSearchItem = function (item) {
        closeSearch();
        item.$link.trigger('click');
    };

    var setSearchActive = function (index) {
        if (!searchVisibleItems.length) {
            searchActiveIndex = 0;
            return;
        }
        if (index < 0) {
            index = searchVisibleItems.length - 1;
        }
        if (index >= searchVisibleItems.length) {
            index = 0;
        }
        searchActiveIndex = index;
        $searchList.children('.admin-search-item').removeClass('selected');
        var $active = $searchList.children('.admin-search-item').eq(index).addClass('selected');
        if ($active.length) {
            try {
                $active[0].scrollIntoView({block: 'nearest'});
            } catch (e) {
            }
        }
    };

    var renderSearch = function (keywords) {
        keywords = $.trim(keywords);
        searchVisibleItems = [];
        $searchList.empty();
        searchItems.forEach(function (item) {
            var titleMatch = findMatch(item.title, keywords);
            var pathMatch = item.path ? findMatch(item.path, keywords) : false;
            if (keywords && false === titleMatch && false === pathMatch) {
                return;
            }
            if (searchVisibleItems.length >= 100) {
                return;
            }
            searchVisibleItems.push(item);
        });
        searchVisibleItems.forEach(function (item, index) {
            var titleMatch = findMatch(item.title, keywords);
            var pathMatch = item.path ? findMatch(item.path, keywords) : false;
            var $item = $('<a href="javascript:;" class="admin-search-item"></a>');
            $item.append('<i class="iconfont icon-list"></i>');
            var $main = $('<span class="admin-search-item-main"></span>');
            $main.append(highlightText(item.title, false === titleMatch ? null : titleMatch));
            if (item.path) {
                var $path = $('<span class="path"></span>');
                $path.append(highlightText(item.path, false === pathMatch ? null : pathMatch));
                $main.append($path);
            }
            $item.append($main);
            $item.on('click', function () {
                openSearchItem(item);
            });
            $item.on('mouseenter', function () {
                setSearchActive(index);
            });
            $searchList.append($item);
        });
        searchActiveIndex = 0;
        $searchPanel.toggleClass('no-result', searchVisibleItems.length === 0);
        setSearchActive(0);
    };

    var searchLastFocus = null;

    var openSearch = function () {
        if ($searchPanel.hasClass('active')) {
            $searchInput.trigger('focus').trigger('select');
            return;
        }
        buildSearchItems();
        $searchInput.val('');
        renderSearch('');
        searchLastFocus = document.activeElement;
        $searchPanel.addClass('active').attr('aria-hidden', 'false');
        // 面板打开时让框架退出无障碍树与 Tab 序列，避免焦点跑到遮罩后的页面
        $frame.attr('inert', 'inert');
        setTimeout(function () {
            $searchInput.trigger('focus');
        }, 20);
    };

    var closeSearch = function () {
        if (!$searchPanel.hasClass('active')) {
            return;
        }
        $searchPanel.removeClass('active').attr('aria-hidden', 'true');
        $frame.removeAttr('inert');
        $searchInput.trigger('blur');
        if (searchLastFocus && searchLastFocus.focus) {
            try {
                searchLastFocus.focus();
            } catch (e) {
            }
        }
        searchLastFocus = null;
    };

    var toggleSearch = function () {
        if ($searchPanel.hasClass('active')) {
            closeSearch();
        } else {
            openSearch();
        }
    };

    $searchTrigger.on('click', function () {
        toggleSearch();
        return false;
    });
    $searchPanel.find('[data-search-close]').on('click', closeSearch);
    $searchInput.on('input', function () {
        renderSearch($(this).val());
    });
    $searchInput.on('keydown', function (e) {
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            setSearchActive(searchActiveIndex + 1);
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            setSearchActive(searchActiveIndex - 1);
        } else if (e.key === 'Enter') {
            e.preventDefault();
            var item = searchVisibleItems[searchActiveIndex];
            if (item) {
                openSearchItem(item);
            }
        } else if (e.key === 'Escape') {
            e.preventDefault();
            closeSearch();
        }
    });
    // 焦点陷阱放到面板级，焦点落在结果项上也能循环
    $searchPanel.on('keydown', function (e) {
        if (e.key !== 'Tab') {
            return;
        }
        var $focusable = $searchPanel.find('.admin-search-dialog').find('input, a[href], [tabindex]:not([tabindex="-1"])').filter(':visible');
        if (!$focusable.length) {
            return;
        }
        var first = $focusable[0];
        var last = $focusable[$focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
        }
    });
    // 供内容区 iframe 内的 Cmd/Ctrl+K 调用
    window._adminSearch = {
        open: openSearch,
        close: closeSearch,
        toggle: toggleSearch,
    };
    $(document).on('keydown', function (e) {
        var isTabPage = $('html').is('[data-page-is-tab]');
        if (!$searchPanel.length) {
            // 内容区 iframe：把快捷键转发给父页面
            if (isTabPage && (e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')
                && window.parent !== window && window.parent._adminSearch) {
                e.preventDefault();
                window.parent._adminSearch.open();
            } else if (isTabPage && e.key === 'Escape'
                && window.parent !== window && window.parent._adminSearch) {
                window.parent._adminSearch.close();
            }
            return;
        }
        if ((e.ctrlKey || e.metaKey) && (e.key === 'k' || e.key === 'K')) {
            e.preventDefault();
            openSearch();
        } else if (e.key === 'Escape' && $searchPanel.hasClass('active')) {
            closeSearch();
        }
    });


    // 左侧菜单拖拽
    // 让$adminTabMenu可以水平滚动
    // console.log('page-tabs-enable')
    var menuDragData = {
        draging: false,
        scrollTopStart: 0,
        startX: 0,
        startY: 0,
        isDragged: false,
    };
    $menu.on('mousedown', function (e) {
        menuDragData.draging = true;
        menuDragData.scrollTopStart = $menu.scrollTop();
        menuDragData.startX = e.pageX;
        menuDragData.startY = e.pageY;
        menuDragData.isDragged = false;
    });
    $menu.on('mousemove', function (e) {
        if (!menuDragData.draging) {
            return;
        }
        var offsetX = e.pageX - menuDragData.startX;
        var offsetY = e.pageY - menuDragData.startY;
        //console.log('mousemove', menuDragData.scrollTopStart, offsetX, offsetY, menuDragData.scrollTopStart - offsetY)
        if (offsetX * offsetX + offsetY * offsetY > 10) {
            menuDragData.isDragged = true;
        }
        $menu.scrollTop(menuDragData.scrollTopStart - offsetY);
        $menu.addClass('moving');
    })
    $menu.on('mouseup', function (e) {
        //console.log('mouseup', e.pageX, e.pageY)
        menuDragData.draging = false;
        $menu.removeClass('moving');
    });
    $menu.on('mouseleave', function (e) {
        //console.log('mouseleave', e.pageX, e.pageY)
        menuDragData.draging = false;
        $menu.removeClass('moving');
    });

    // 弹窗控制
    var $adminTabPage = $frame.find('#adminTabPage');
    var $adminTabMenu = $frame.find('#adminTabMenu');
    var $adminMainPage = $frame.find('#adminMainPage');
    var $adminTabRefresh = $frame.find('#adminTabRefresh');
    var $adminTabScrollbar = $frame.find('#adminTabScrollbar');
    // 自绘标签栏滚动条：按当前滚动位置换算滑块的 left/width
    var updateTabScrollbar = function () {
        var el = $adminTabMenu[0];
        if (!el || !$adminTabScrollbar.length) {
            return;
        }
        var max = el.scrollWidth - el.clientWidth;
        if (max <= 1) {
            $adminTabScrollbar.removeClass('active');
            return;
        }
        var menuRect = el.getBoundingClientRect();
        var topRect = $frame.find('.right .top')[0].getBoundingClientRect();
        var trackWidth = menuRect.width;
        var thumbWidth = Math.min(trackWidth, Math.max(40, trackWidth * trackWidth / el.scrollWidth));
        var offset = el.scrollLeft / max * (trackWidth - thumbWidth);
        $adminTabScrollbar.css({
            width: thumbWidth,
            left: (menuRect.left - topRect.left) + offset,
        }).addClass('active');
    };
    $adminTabMenu.on('scroll', updateTabScrollbar);
    $(window).on('resize', updateTabScrollbar);
    if ($('html').is('[page-tabs-enable]') && !isMobile && !$('html').is('[data-page-is-tab]')) {
        // 让$adminTabMenu可以水平滚动
        // console.log('page-tabs-enable')
        var dragData = {
            draging: false,
            scrollLeftStart: 0,
            startX: 0,
            startY: 0,
            isDragged: false,
        };
        $adminTabMenu.on('mousedown', function (e) {
            dragData.draging = true;
            dragData.scrollLeftStart = $adminTabMenu.scrollLeft();
            dragData.startX = e.pageX;
            dragData.startY = e.pageY;
            dragData.isDragged = false;
        });
        $adminTabMenu.on('mousemove', function (e) {
            if (!dragData.draging) {
                return;
            }
            var offsetX = e.pageX - dragData.startX;
            var offsetY = e.pageY - dragData.startY;
            if (offsetX * offsetX + offsetY * offsetY > 10) {
                dragData.isDragged = true;
            }
            $adminTabMenu.scrollLeft(dragData.scrollLeftStart - offsetX);
            $adminTabMenu.addClass('moving');
        })
        $adminTabMenu.on('mouseup', function (e) {
            dragData.draging = false;
            $adminTabMenu.removeClass('moving');
        });
        $adminTabMenu.on('mouseleave', function (e) {
            dragData.draging = false;
            $adminTabMenu.removeClass('moving');
        });

        // 按管理员账号隔离标签缓存，避免共享浏览器下跨账号恢复
        var adminUserName = $.trim($frame.find('.menu-right .title.admin-user .name').last().text());
        var tabStorageKey = 'msAdminTabs' + (adminUserName ? ':' + adminUserName : '');
        var tabManager = Object.assign(window._pageTabManager, {
            data: [],
            id: 1,
            runsOnFocus: [],
            storageKey: tabStorageKey,
            normalTabUrl(url) {
                if (!url) {
                    return url
                }
                if (url.indexOf('_is_tab=1') > 0) {
                    return url
                }
                const u = new URL(url, document.baseURI)
                url = u.href
                let pcs = url.split('#');
                let path = pcs[0];
                path = path.replace(/\/$/, '')
                path = path + (path.indexOf('?') > -1 ? '&' : '?') + '_is_tab=1'
                return path + (pcs[1] ? '#' + pcs[1] : '');
            },
            getIndexById: function (id) {
                id = parseInt(id)
                for (var i = 0; i < this.data.length; i++) {
                    if (this.data[i].id == id) {
                        return i;
                    }
                }
                return null;
            },
            getById: function (id) {
                var index = this.getIndexById(id);
                return (null === index) ? null : this.data[index];
            },
            getByUrl: function (url) {
                url = this.normalTabUrl(url)
                for (var i = 0; i < this.data.length; i++) {
                    if (this.data[i].url == url) {
                        return this.data[i];
                    }
                }
                return null;
            },
            defaultOption: function (url) {
                var self = this;
                return {
                    focus: function () {
                        self.activeUrl(url);
                    },
                    blur: function () {
                        self.blurUrl(url);
                    },
                };
            },
            save: function () {
                try {
                    var tabs = this.data.map(function (tab) {
                        return {
                            id: tab.id,
                            url: tab.url,
                            rawUrl: tab.rawUrl,
                            title: tab.title,
                        };
                    });
                    window.sessionStorage.setItem(this.storageKey, JSON.stringify({
                        id: this.id,
                        active: this.activeId(),
                        tabs: tabs,
                    }));
                } catch (e) {
                }
                updateTabScrollbar();
            },
            restore: function () {
                var raw = null;
                try {
                    raw = window.sessionStorage.getItem(this.storageKey);
                } catch (e) {
                    return;
                }
                if (!raw) {
                    return;
                }
                var state = null;
                try {
                    state = JSON.parse(raw);
                } catch (e) {
                    return;
                }
                if (!state || !state.tabs || !state.tabs.length) {
                    return;
                }
                var self = this;
                var mainUrl = this.normalTabUrl(window.location.href);
                state.tabs.forEach(function (tab) {
                    if (!tab || !tab.url || tab.url === mainUrl) {
                        return;
                    }
                    self.add(tab.rawUrl || tab.url, tab.url, tab.title || '', null, tab.id);
                });
                if (state.id && state.id > this.id) {
                    this.id = state.id;
                }
                if (state.active && this.getById(state.active)) {
                    this.active(state.active);
                } else {
                    this.active(null);
                }
            },
            add: function (rawUrl, url, title, option, id) {
                if (undefined === id || null === id || '' === id) {
                    id = this.id++;
                }
                id = parseInt(id);
                if (id >= this.id) {
                    this.id = id + 1;
                }
                var $iframe = $('<iframe class="hidden" frameborder="0"></iframe>')
                    .attr('src', url)
                    .attr('data-tab-page', id);
                $adminTabPage.append($iframe);
                var closeLabel = $adminTabMenu.data('close-label') || 'Close';
                var $link = $('<a href="javascript:;" draggable="false"></a>')
                    .attr('data-tab-menu', id)
                    .attr('title', title || '');
                $link.append($('<span class="text"></span>').text(title || ''));
                $link.append($('<i class="close iconfont icon-close" role="button" tabindex="0"></i>').attr('title', closeLabel).attr('aria-label', closeLabel));
                $adminTabMenu.append($link);
                this.data.push({
                    id: id,
                    url: url,
                    rawUrl: rawUrl,
                    title: title || '',
                    active: false,
                    option: option || this.defaultOption(rawUrl),
                });
                return id;
            },
            close: function (id) {
                var index = this.getIndexById(id);
                if (null === index) {
                    return;
                }
                var tab = this.data[index];
                $adminTabPage.find('[data-tab-page=' + id + ']').remove();
                $adminTabMenu.find('[data-tab-menu=' + id + ']').remove();
                this.data.splice(index, 1);
                if (tab.active) {
                    if (this.data.length) {
                        this.active(this.data[Math.min(index, this.data.length - 1)].id);
                    } else {
                        this.active(null);
                    }
                }
                this.save();
            },
            closeOthers: function (id) {
                var self = this;
                this.data.slice().forEach(function (tab) {
                    if (String(tab.id) !== String(id)) {
                        self.close(tab.id);
                    }
                });
                if (id && this.getById(id)) {
                    this.active(id);
                }
                this.save();
            },
            closeAll: function () {
                var self = this;
                this.data.slice().forEach(function (tab) {
                    self.close(tab.id);
                });
                this.active(null);
                this.save();
            },
            updateMainPage: function () {
                let hasTab = (this.data.filter(o => o.active).length > 0)
                $adminMainPage.toggleClass('hidden', hasTab);
                $adminTabPage.toggleClass('hidden', !hasTab);
                let $menuMain = $menu.find('.menu-item.page-main').last();
                $menuMain.toggleClass('active', !hasTab);
                if (!hasTab) {
                    window.document.title = $.trim($menuMain.text());
                    $menuMain.parents('.menu-item').addClass('active');
                }
            },
            activeId: function () {
                for (var i = 0; i < this.data.length; i++) {
                    if (this.data[i].active) {
                        return this.data[i].id;
                    }
                }
                return null
            },
            activeByUrl: function (url) {
                let tab = this.getByUrl(url);
                if (!tab) {
                    return
                }
                this.active(tab.id)
            },
            refresh: function () {
                let activeId = this.activeId()
                if (!activeId) {
                    window.location.reload()
                    return
                }
                let $iframe = $adminTabPage.find('iframe[data-tab-page=' + activeId + ']')
                if ($iframe.length && $iframe[0].contentWindow) {
                    $iframe[0].contentWindow.location.reload()
                }
            },
            active: function (id) {
                if (!id) {
                    $adminTabPage.find('iframe').addClass('hidden')
                    $adminTabMenu.find('a').removeClass('active').removeAttr('aria-current')
                    let $tabMenu = $adminTabMenu.find('[data-tab-menu-main]').addClass('active').attr('aria-current', 'page');
                    try {
                        $tabMenu[0].scrollIntoView({block: 'center', behavior: 'smooth'});
                    } catch (e) {
                    }
                    for (var i = 0; i < this.data.length; i++) {
                        if (this.data[i].active) {
                            this.data[i].option.blur()
                        }
                        this.data[i].active = false
                    }
                    this.updateMainPage()
                    this.save()
                    return
                }
                var tab = this.getById(id);
                if (!tab) {
                    return;
                }
                $adminTabPage.find('iframe').addClass('hidden').filter('[data-tab-page=' + id + ']').removeClass('hidden');
                $adminTabMenu.find('a').removeClass('active').removeAttr('aria-current')
                    .filter('[data-tab-menu=' + id + ']').addClass('active').attr('aria-current', 'page');
                let $tabMenu = $adminTabMenu.find('[data-tab-menu=' + id + ']');
                try {
                    $tabMenu[0].scrollIntoView({block: 'center', behavior: 'smooth'});
                } catch (e) {
                }
                for (var i = 0; i < this.data.length; i++) {
                    var active = (this.data[i].id == id)
                    if (this.data[i].active !== active) {
                        if (!active) {
                            this.data[i].option.blur()
                            this.data[i].active = active;
                        }
                    }
                }
                for (var i = 0; i < this.data.length; i++) {
                    var active = (this.data[i].id == id)
                    if (this.data[i].active !== active) {
                        if (active) {
                            this.data[i].option.focus()
                            this.data[i].active = active;
                        }
                    }
                }

                window.document.title = tab.title

                var $iframes = $adminTabPage.find('iframe:not(.hidden)');
                for (var i = 0; i < $iframes.length; i++) {
                    var $iframe = $iframes[i];
                    if ($iframe.contentWindow
                        && $iframe.contentWindow._pageTabManager
                        && $iframe.contentWindow._pageTabManager.runsOnFocus) {
                        for (var j = 0; j < $iframe.contentWindow._pageTabManager.runsOnFocus.length; j++) {
                            var fn = $iframe.contentWindow._pageTabManager.runsOnFocus[j];
                            fn();
                        }
                        $iframe.contentWindow._pageTabManager.runsOnFocus = [];
                    }
                }

                this.updateMainPage()
                this.save()
            },
            open: function (url, title, option) {
                var rawUrl = url;
                url = this.normalTabUrl(url)
                var urlMain = this.normalTabUrl(window.location.href);
                if (urlMain === url) {
                    this.active(0)
                    return
                }
                var current = this.getByUrl(url);
                if (current) {
                    this.active(current.id);
                    return
                }
                var id = this.add(rawUrl, url, title, option);
                this.active(id);
            },
            updateTitle: function (id, title) {
                var tab = this.getById(id);
                if (tab) {
                    tab.title = title;
                }
                $adminTabMenu.find('[data-tab-menu=' + id + ']')
                    .attr('title', title)
                    .find('> .text').text(title);
                // 只有激活标签才能改浏览器标题，避免后台恢复多个 iframe 时被最后加载的标签抢走标题
                if (tab && tab.active) {
                    window.document.title = title
                }
                this.save()
            },
        });
        $menu.find('a').on('click', function () {
            var $this = $(this);
            if ($this.is('[data-tab-menu-ignore]')) {
                return;
            }
            let url = $this.attr('href');
            if (!url || ['javascript:;'].includes(url)) {
                return;
            }
            let title = $.trim($this.children('.text').first().text()) || $.trim($this.text())
            tabManager.open(url, title)
            if (isMobile) {
                $frame.removeClass('left-toggle');
                updateLeftTriggerState();
            }
            return false;
        });

        // Logo 在标签模式下回到主工作台，避免整页重载丢失 iframe 内未保存内容
        $frame.find('.left .logo').on('click', function () {
            tabManager.active(null);
            if (isMobile) {
                $frame.removeClass('left-toggle');
                updateLeftTriggerState();
            }
            return false;
        });
        $adminTabMenu.on('click', '[data-tab-menu-main]', function () {
            if (dragData.isDragged) {
                return;
            }
            tabManager.active(null)
            return false;
        });
        $adminTabMenu.on('click', '[data-tab-menu]', function (e) {
            if (dragData.isDragged || $(e.target).closest('.close').length) {
                return;
            }
            tabManager.active($(this).attr('data-tab-menu'))
        });
        $adminTabMenu.on('click', '[data-tab-menu] i.close', function (e) {
            e.stopPropagation();
            tabManager.close($(this).parent().attr('data-tab-menu'));
            return false;
        });
        // 键盘：Enter/Space 关闭按钮，Delete/Backspace 关闭当前标签
        $adminTabMenu.on('keydown', '[data-tab-menu] .close', function (e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                e.stopPropagation();
                tabManager.close($(this).parent().attr('data-tab-menu'));
            }
        });
        $adminTabMenu.on('keydown', '[data-tab-menu]', function (e) {
            if (e.key === 'Delete' || e.key === 'Backspace') {
                e.preventDefault();
                tabManager.close($(this).attr('data-tab-menu'));
            }
        });
        $adminTabMenu.on('scroll', function () {
            hideTabContext();
        });

        // 标签右键菜单：关闭当前 / 关闭其他 / 关闭全部
        var $tabContext = $('#adminTabContextMenu');
        var contextTabId = null;
        var hideTabContext = function () {
            $tabContext.removeClass('active').attr('aria-hidden', 'true');
            contextTabId = null;
        };
        var showTabContext = function (e, id) {
            contextTabId = id;
            // 主标签没有「关闭当前」，也没有可保留的其它标签，隐藏这两个入口避免与「关闭全部」重复
            $tabContext.find('[data-tab-action="close"], [data-tab-action="others"]').toggle(!!id);
            $tabContext.addClass('active').attr('aria-hidden', 'false');
            var x = Math.min(e.clientX, $(window).width() - $tabContext.outerWidth() - 8);
            var y = Math.min(e.clientY, $(window).height() - $tabContext.outerHeight() - 8);
            $tabContext.css({left: Math.max(8, x), top: Math.max(8, y)});
        };
        $adminTabMenu.on('contextmenu', '[data-tab-menu]', function (e) {
            e.preventDefault();
            showTabContext(e, $(this).attr('data-tab-menu'));
        });
        $adminTabMenu.on('contextmenu', '[data-tab-menu-main]', function (e) {
            e.preventDefault();
            showTabContext(e, null);
        });
        $tabContext.on('click', '[data-tab-action]', function () {
            var action = $(this).attr('data-tab-action');
            if (action === 'close' && contextTabId) {
                tabManager.close(contextTabId);
            } else if (action === 'others') {
                if (contextTabId) {
                    tabManager.closeOthers(contextTabId);
                } else {
                    tabManager.closeAll();
                }
            } else if (action === 'all') {
                tabManager.closeAll();
            }
            hideTabContext();
            return false;
        });
        $(document).on('mousedown', function (e) {
            if (!$(e.target).closest('#adminTabContextMenu').length) {
                hideTabContext();
            }
        });
        $(window).on('resize', hideTabContext);
        $(document).on('keydown', function (e) {
            if (e.key === 'Escape') {
                hideTabContext();
            }
        });

        $adminTabRefresh.on('click', function () {
            tabManager.refresh();
            return false;
        });
        $(document).on('click', '[data-tab-open]', function () {
            let url = $(this).attr('href');
            if (['javascript:;'].includes(url)) {
                return;
            }
            let title = $(this).attr('data-tab-title');
            if (!title) {
                title = $(this).text();
            }
            _rootWindow._pageTabManager.open(url, title, {
                focus: function () {
                    tabManager.activeUrl(url);
                },
                blur: function () {
                    tabManager.blurUrl(url);
                }
            });
            return false;
        });
        window._pageTabManager = tabManager
        tabManager.restore();
        setTimeout(updateTabScrollbar, 60);
    } else {
        $adminTabRefresh.addClass('is-hidden');
    }

    // 全屏
    var $fullscreen = $frame.find('#fullScreenTrigger')
    $fullscreen.on('click', function () {
        MS.util.fullscreen.trigger();
        return false;
    });

    // 事件
    window.addEventListener('message', function (e) {
        const data = e.data;
        if (!data.type) {
            return
        }
        if (data.type !== 'FeedbackTicket:log' && data.type !== 'FeedbackTicket:env') {
            return
        }
        const sendMsg = function (type, data) {
            const iframe = $('iframe')[0]
            iframe.contentWindow.postMessage({type: type, data: data}, '*');
        }
        MS.api.post(window.__msAdminRoot + 'collect', {data: JSON.stringify(data)}, function (res) {
            MS.api.defaultCallback(res, {
                success: function (res) {
                    sendMsg(data.type, res.data)
                }
            })
        });
    });

    // 关闭窗口/刷新时提醒：标签内容刷新后会恢复，但仍可能有未提交的表单，因此保留确认
    if (!$('html[data-page-is-tab]').length) {
        window.addEventListener('beforeunload', e => {
            var needBlock = false;
            if (window.parent === window) {
                if ($adminTabMenu.find('[data-tab-menu]').length > 0) {
                    needBlock = true;
                }
                if ($('.layui-layer-iframe').length > 0) {
                    needBlock = true;
                }
            }
            if (needBlock) {
                e.preventDefault();
                e.returnValue = '';
            }
        });
    }

});
