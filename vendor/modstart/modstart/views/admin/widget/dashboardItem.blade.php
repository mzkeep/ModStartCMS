<?php
// Layout: title row, one primary metric, optional secondary metrics pinned to the
// bottom. Primary metrics should share one meaning across cards (the running
// total), while today's numbers drop into the footer as secondary data.
// All styling comes from existing `ub-` / `tw-` utility classes; colors are
// design tokens read inline so nothing has to be added to dashboard.less.
$statItems = is_array($value) ? $value : array();
$statMain = count($statItems) > 0 ? $statItems[0] : null;
$statRest = count($statItems) > 1 ? array_slice($statItems, 1) : array();
$statHref = ($statMain && !empty($statMain['url'])) ? $statMain['url'] : null;
$statTag = $statHref ? 'a' : 'div';
// Accent color falls back to the theme primary so all cards share one accent.
$statAccent = empty($color) ? 'var(--color-primary)' : $color;

$statMainText = '';
$statMainUnit = '';
$statMainDeltaDirection = '';
$statMainDeltaText = '';
if ($statMain) {
    $statMainFormat = !empty($statMain['format']) ? $statMain['format'] : null;
    $statMainText = \ModStart\Admin\Widget\DashboardItem::formatValue($statMain['value'], $statMainFormat);
    // Money values are rendered as a smaller currency symbol before the number.
    // Strip it with a regex: "¥" is multi-byte, so substr() would split it.
    if ('money' === $statMainFormat && strpos($statMainText, '¥') === 0) {
        $statMainUnit = '¥';
        $statMainText = preg_replace('/^¥/', '', $statMainText);
    }
    if (!empty($statMain['delta'])) {
        $statMainDeltaDirection = \ModStart\Admin\Widget\DashboardItem::deltaDirection($statMain['delta']);
        $statMainDeltaText = ($statMainDeltaDirection === 'down' ? '▼ ' : '▲ ')
            . ltrim($statMain['delta'], '+-');
    }
}

$statRestView = array();
foreach ($statRest as $statItem) {
    $statItemFormat = !empty($statItem['format']) ? $statItem['format'] : null;
    $statRow = array(
        'title' => $statItem['title'],
        'text' => \ModStart\Admin\Widget\DashboardItem::formatValue($statItem['value'], $statItemFormat),
        'deltaDirection' => '',
        'deltaText' => '',
    );
    if (!empty($statItem['delta'])) {
        $statRow['deltaDirection'] = \ModStart\Admin\Widget\DashboardItem::deltaDirection($statItem['delta']);
        $statRow['deltaText'] = ($statRow['deltaDirection'] === 'down' ? '▼ ' : '▲ ')
            . ltrim($statItem['delta'], '+-');
    }
    $statRestView[] = $statRow;
}
?>
<{{ $statTag }} class="ub-content-box margin-bottom tw-flex tw-flex-col tw-overflow-hidden tw-h-36"
style="padding:1rem;color:inherit;text-decoration:none;"
@if($statHref) href="{{ $statHref }}" data-tab-open data-tab-title="加载中..."@endif>
    <div class="tw-flex tw-items-center tw-gap-2 tw-flex-shrink-0 tw-min-w-0">
        @if(!empty($icon))
            <span class="tw-inline-flex tw-items-center tw-justify-center tw-w-8 tw-h-8 tw-flex-shrink-0"
                  style="border-radius:var(--size-radius-sm);background:var(--color-primary-light-bg);color:{{ $statAccent }};">
                <i class="{{ $icon }}" style="font-size:1rem;line-height:1;"></i>
            </span>
        @endif
        <span class="tw-flex-grow tw-min-w-0 tw-truncate tw-font-medium"
              style="color:var(--color-heading);">{{ $title }}</span>
        @if($statHref)
            <svg class="tw-flex-shrink-0" width="14" height="14" viewBox="0 0 24 24" fill="none"
                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                 style="color:var(--color-tertiary-light);" aria-hidden="true">
                <line x1="7" y1="17" x2="17" y2="7"/>
                <polyline points="7 7 17 7 17 17"/>
            </svg>
        @endif
    </div>
    @if($statMain)
        <div class="tw-flex tw-flex-wrap tw-items-baseline tw-gap-1 tw-min-w-0 tw-mt-3">
            <span class="tw-font-semibold tw-text-2xl tw-tabular-nums tw-truncate"
                  style="color:var(--color-heading);line-height:1.2;">@if('' !== $statMainUnit)<span style="font-size:0.9375rem;">{{ $statMainUnit }}</span>@endif{{ $statMainText }}</span>
            <span class="tw-text-xs tw-flex-shrink-0" style="color:var(--color-tertiary);">{{ $statMain['title'] }}</span>
            @if('' !== $statMainDeltaText)
                <span class="tw-inline-block tw-rounded-full tw-px-1 tw-text-xs tw-font-medium tw-tabular-nums tw-flex-shrink-0"
                      style="line-height:1.125rem;{{ 'down' === $statMainDeltaDirection ? 'color:var(--color-danger-dark);background:var(--color-danger-light);' : 'color:var(--color-success-dark);background:var(--color-success-light);' }}">{{ $statMainDeltaText }}</span>
            @endif
        </div>
    @endif
    @if(count($statRestView) > 0)
        <div class="ub-border-top tw-flex tw-flex-wrap tw-items-baseline tw-gap-x-2 tw-gap-y-1 tw-pt-2 tw-mt-auto tw-min-w-0">
            @foreach($statRestView as $statRow)
                <span class="tw-inline-flex tw-items-baseline tw-gap-1 tw-text-xs tw-min-w-0">
                    <span class="tw-truncate" style="color:var(--color-tertiary);">{{ $statRow['title'] }}</span>
                    <span class="tw-font-medium tw-tabular-nums" style="color:var(--color-text);">{{ $statRow['text'] }}</span>
                    @if('' !== $statRow['deltaText'])
                        <span class="tw-inline-block tw-rounded-full tw-px-1 tw-font-medium tw-tabular-nums tw-flex-shrink-0"
                              style="font-size:0.625rem;line-height:1rem;{{ 'down' === $statRow['deltaDirection'] ? 'color:var(--color-danger-dark);background:var(--color-danger-light);' : 'color:var(--color-success-dark);background:var(--color-success-light);' }}">{{ $statRow['deltaText'] }}</span>
                    @endif
                </span>
            @endforeach
        </div>
    @endif
</{{ $statTag }}>
