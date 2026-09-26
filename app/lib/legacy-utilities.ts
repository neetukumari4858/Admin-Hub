export const legacyUtilities: Record<string, string> = {
  "tw-global":
    "[margin:0] [min-height:100%] [font-family:Arial,_Helvetica,_sans-serif] [color:#172238] [background:#f6f8fb] [font-size:13px] [&_button]:[font:inherit] [&_input]:[font:inherit] [&_select]:[font:inherit] [&_button]:[cursor:pointer] [&_table]:[width:100%] [&_table]:[border-collapse:collapse] [&_table]:[text-align:left] [&_table]:[white-space:nowrap] [&_th]:[height:34px] [&_th]:[background:#f7f9fb] [&_th]:[color:#6c7a8f] [&_th]:[font-size:9px] [&_th]:[font-weight:600] [&_th]:[text-transform:uppercase] [&_th]:[letter-spacing:0.25px] [&_th]:[padding:0_10px] [&_th:first-child]:[border-radius:5px_0_0_5px] [&_th:last-child]:[border-radius:0_5px_5px_0] [&_td]:[height:43px] [&_td]:[border-bottom:1px_solid_#edf0f4] [&_td]:[padding:5px_10px] [&_td]:[color:#46546a] [&_td]:[font-size:10px] [cursor:pointer] [background:#fafbff] [color:#253149] [font-weight:600]",
  toolbar:
    "[&_input]:[height:34px] [&_select]:[height:34px] [&_.sort-label_select]:[height:34px] [&_input]:[border:1px_solid_#e4eaf1] [&_select]:[border:1px_solid_#e4eaf1] [&_.sort-label_select]:[border:1px_solid_#e4eaf1] [&_input]:[background:#fbfcfe] [&_select]:[background:#fbfcfe] [&_.sort-label_select]:[background:#fbfcfe] [&_input]:[border-radius:6px] [&_select]:[border-radius:6px] [&_.sort-label_select]:[border-radius:6px] [&_input]:[padding:0_10px] [&_select]:[padding:0_10px] [&_.sort-label_select]:[padding:0_10px] [&_input]:[color:#526176] [&_select]:[color:#526176] [&_.sort-label_select]:[color:#526176] [&_input]:[font-size:11px] [&_select]:[font-size:11px] [&_.sort-label_select]:[font-size:11px] [min-height:59px] [display:flex] [align-items:center] [gap:9px] [border-bottom:1px_solid_#e4eaf1] [margin-bottom:12px] [flex-wrap:wrap] [&_input]:[min-width:190px] [&_input]:[flex:1] [&_select]:[min-width:95px] [&_.sort-label]:[margin-left:auto] [&_.sort-label]:[color:#77849a] [&_.sort-label]:[font-size:10px] [&_.sort-label]:[display:flex] [&_.sort-label]:[align-items:center] [&_.sort-label]:[gap:5px] max-[760px]:[padding:10px_0] max-[760px]:[gap:7px] max-[760px]:[&_input]:[flex-basis:100%] max-[760px]:[&_input]:[max-width:none] max-[760px]:[&_select]:[flex:1] max-[760px]:[&_select]:[min-width:0] max-[760px]:[&_.sort-label]:[margin-left:0]",
  avatar:
    "[width:30px] [height:30px] [border-radius:50%] [display:grid] [place-items:center] [object-fit:cover] [background:#dde4f5] [color:#38446b] [font-size:10px] [font-weight:700] [border:1px_solid_#d5deeb]",
  "avatar-small": "[width:22px] [height:22px] [font-size:8px]",
  content:
    "[max-width:1500px] [margin:0_auto] [padding:25px_28px_40px] [&:has(.detail-page)>:not(.detail-page)]:[display:none] max-[1100px]:[padding-left:20px] max-[1100px]:[padding-right:20px] max-[760px]:[padding:18px_14px_22px] max-[760px]:[&:has(.users-metrics)]:[display:flex] max-[760px]:[&:has(.users-metrics)]:[flex-direction:column] max-[760px]:[&:has(.users-metrics)>.directory-card]:[display:contents] max-[760px]:[&:has(.users-metrics)>.users-metrics]:[order:2] max-[760px]:[&:has(.users-metrics)>.directory-card>.user-toolbar]:[order:1] max-[760px]:[&:has(.users-metrics)>.directory-card>.user-toolbar]:[width:100%] max-[760px]:[&:has(.users-metrics)>.mobile-page-action]:[order:3] max-[760px]:[&:has(.users-metrics)>.directory-card>.mobile-user-list]:[order:3] max-[760px]:[&:has(.users-metrics)>.directory-card>.pagination]:[order:4] max-[760px]:[&:has(.transaction-success)]:[display:flex] max-[760px]:[&:has(.booking-toolbar)]:[display:flex] max-[760px]:[&:has(.transaction-success)]:[flex-direction:column] max-[760px]:[&:has(.booking-toolbar)]:[flex-direction:column] max-[760px]:[&:has(.transaction-success)>.directory-card]:[display:contents] max-[760px]:[&:has(.booking-toolbar)>.directory-card]:[display:contents] max-[760px]:[&:has(.transaction-success)>.metrics-grid]:[order:2] max-[760px]:[&:has(.booking-toolbar)>.metrics-grid]:[order:2] max-[760px]:[&:has(.transaction-success)>.directory-card>.transaction-toolbar]:[order:1] max-[760px]:[&:has(.booking-toolbar)>.directory-card>.booking-toolbar]:[order:1] max-[760px]:[&:has(.transaction-success)>.directory-card>.transaction-toolbar]:[width:100%] max-[760px]:[&:has(.booking-toolbar)>.directory-card>.booking-toolbar]:[width:100%] max-[760px]:[&:has(.transaction-success)>.directory-card>.mobile-transaction-list]:[order:3] max-[760px]:[&:has(.transaction-success)>.directory-card>.pagination]:[order:4] max-[760px]:[&:has(.booking-toolbar)>.mobile-page-action]:[order:3] max-[760px]:[&:has(.booking-toolbar)>.directory-card>.mobile-booking-list]:[order:4] max-[760px]:[&:has(.booking-toolbar)>.directory-card>.pagination]:[order:5]",
  "page-heading":
    "[display:flex] [justify-content:space-between] [align-items:center] [margin:0_0_17px] [&_h1]:[font-size:22px] [&_h1]:[margin:0_0_5px] [&_h1]:[letter-spacing:-0.4px] [&_p]:[color:#718096] [&_p]:[font-size:12px] [&_p]:[margin:0] [&_p]:[display:block] max-[760px]:[&_h1]:[font-size:19px] max-[760px]:[&_p]:[font-size:11px] max-[760px]:[&_p]:[max-width:240px] max-[760px]:[&_.primary]:[padding:9px] max-[760px]:[&_.primary]:[font-size:10px] max-[420px]:[&_.primary]:[font-size:9px] max-[420px]:[&_.primary]:[padding:8px]",
  "page-heading-dashboard": "[display:none] max-[760px]:[display:none]",
  "mobile-page-intro":
    "[display:none] max-[760px]:[display:block] max-[760px]:[margin:1px_0_13px] max-[760px]:[&_h1]:[margin:0_0_4px] max-[760px]:[&_h1]:[font-size:16px] max-[760px]:[&_p]:[margin:0] max-[760px]:[&_p]:[color:#718096] max-[760px]:[&_p]:[font-size:10px]",
  "transaction-page-heading":
    "[display:flex] [align-items:center] [justify-content:space-between] [margin:0_0_14px] [&_h1]:[margin:0] [&_h1]:[font-size:22px] [&_p]:[margin:4px_0_0] [&_p]:[color:#718096] [&_p]:[font-size:12px] max-[760px]:[display:none]",
  "page-heading-transactions": "[display:none] max-[760px]:[display:none]",
  "transaction-toolbar":
    "[&_.export-button]:[display:none] [display:flex] [justify-content:space-between] [flex-wrap:nowrap] [&_.export-button]:[margin-left:16px] [&_input]:[min-width:0] [&_input]:[width:100%] max-[760px]:[display:flex] max-[760px]:[flex-wrap:wrap] max-[760px]:[&_.export-button]:[display:none]",
  "dashboard-welcome":
    "[display:grid] [gap:3px] [margin:0_0_13px] [&_strong]:[font-size:16px] [&_small]:[color:#718096] [&_small]:[font-size:10px] [display:none] max-[760px]:[&_strong]:[font-size:13px] max-[760px]:[&_small]:[font-size:9px]",
  "dashboard-view-all":
    "[display:none] max-[760px]:[display:inline-flex] max-[760px]:[margin-left:auto] max-[760px]:[padding:0] max-[760px]:[border:0] max-[760px]:[background:transparent] max-[760px]:[color:#4f46e5] max-[760px]:[font-size:9px]",
  "dashboard-view-all-bottom": "[display:none] max-[760px]:[display:none]",
  "dashboard-filter":
    "[display:inline-flex] [align-items:center] [gap:5px] [margin-left:auto] [padding:6px_9px] [font-size:9px] [border:1px_solid_#d7deea] [border-radius:5px] max-[760px]:[display:none]",
  primary:
    "[border-radius:6px] [padding:9px_13px] [font-size:11px] [font-weight:600] [border:1px_solid_transparent] [background:#4f46e5] ![color:white] [&:hover]:[background: #4F46E5]",
  secondary:
    "[border-radius:6px] [padding:9px_13px] [font-size:11px] [font-weight:600] [border:1px_solid_transparent] [background:#fff] [border-color:#e4eaf1] [color:#36445a]",
  danger:
    "[border-radius:6px] [padding:9px_13px] [font-size:11px] [font-weight:600] [border:1px_solid_transparent] [background:#fff] [color:#d14343] [border-color:#fecaca]",
  "bulk-role-button":
    "[color:#334155] [border:1px_solid_#e2e8f0] [background:#fff]",
  "bulk-suspend-button":
    "[color:#ef4444] [border:1px_solid_#fecaca] [background:#fff]",
  tabs: "[display:flex] [border-bottom:1px_solid_#e4eaf1] [gap:22px] [margin-bottom:15px] [&_button]:[border:0] [&_button]:[background:none] [&_button]:[color:#617086] [&_button]:[font-size:12px] [&_button]:[padding:10px_8px_9px] [&_.active-tab]:[color:#4f46e5] [&_.active-tab]:[border-bottom:2px_solid_#4f46e5] [&_.active-tab]:[font-weight:600] max-[760px]:[gap:14px]",
  "metrics-grid":
    "[display:grid] [grid-template-columns:repeat(4,_minmax(0,_1fr))] [gap:14px] [margin-bottom:16px] max-[1100px]:[gap:9px] max-[760px]:[grid-template-columns:repeat(2,_minmax(0,_1fr))] max-[760px]:[gap:9px]",
  metric:
    "[padding:14px_16px] [&>strong]:[display:block] [&>strong]:[font-size:20px] [&>strong]:[margin:6px_0_5px] [&>strong]:[letter-spacing:-0.4px] max-[1100px]:[padding:12px] max-[1100px]:[&>strong]:[font-size:18px]",
  card: "[background:#fff] [border:1px_solid_#e4eaf1] [border-radius:7px] [box-shadow:0_1px_2px_#17223808]",
  "metric-top":
    "[display:flex] [align-items:center] [justify-content:space-between] [color:#627087] [font-size:11px]",
  "metric-icon":
    "[display:grid] [place-items:center] [background:#eff0ff] [color:#5148e5] [width:30px] [height:30px] [border-radius:50%] [font-weight:700] [&_img]:[width:16px] [&_img]:[height:16px] [&_img]:[object-fit:contain]",
  "metric-foot":
    "[display:flex] [align-items:center] [gap:6px] [&>span]:[font-size:9px] [&>span]:[font-weight:700] [&>span]:[border-radius:3px] [&>span]:[padding:3px_5px] [&_.up]:[color:#09875a] [&_.up]:[background:#d9f6e9] [&_.down]:[color:#db4141] [&_.down]:[background:#ffebeb] [&_small]:[color:#8591a4] [&_small]:[font-size:9px]",
  "dashboard-grid":
    "[display:grid] [grid-template-columns:minmax(0,_1.9fr)_minmax(235px,_1fr)] [gap:14px] [margin-bottom:16px] max-[1100px]:[grid-template-columns:minmax(0,_1.5fr)_minmax(220px,_1fr)] max-[760px]:[display:contents] max-[760px]:[&>.side-widgets]:[display:contents] max-[760px]:[grid-template-columns:1fr]",
  "dashboard-transactions": "[width:100%] [grid-column:1_/_-1] [min-width:0]",
  "chart-card": "[padding:15px] max-[760px]:[min-height:0]",
  "alert-card":
    "[padding:15px] [&_h2]:[font-size:14px] [&_h2]:[margin:0] [&_h2]:[margin-bottom:10px]",
  "health-card":
    "[padding:15px] [&_h2]:[font-size:14px] [&_h2]:[margin:0] [&_h2]:[margin-bottom:10px] [&>div]:[display:flex] [&>div]:[justify-content:space-between] [&>div]:[border-top:1px_solid_#f0f2f6] [&>div]:[padding:9px_0] [&>div]:[color:#69778b] [&>div]:[font-size:10px] [&>div_b]:[color:#253149] max-[760px]:[&>div]:[font-size:9px]",
  "table-card":
    "[padding:15px] [&_.card-heading]:[margin-bottom:10px] max-[760px]:[&>.card-heading]:[align-items:center]",
  "card-heading":
    "[display:flex] [justify-content:space-between] [align-items:center] [margin-bottom:12px] [&_h2]:[font-size:14px] [&_h2]:[margin:0] [&_small]:[display:block] [&_small]:[color:#8793a5] [&_small]:[font-size:10px] [&_small]:[margin-top:4px] [&_select]:[background:#f8f9fc] [&_select]:[border:1px_solid_#e4eaf1] [&_select]:[padding:5px_8px] [&_select]:[border-radius:4px] [&_select]:[font-size:10px]",
  "range-tabs":
    "[display:flex] [align-items:center] [gap:3px] [padding:3px] [border:1px_solid_#e4eaf1] [background:#f7f9fc] [border-radius:5px] [&_button]:[min-width:34px] [&_button]:[height:25px] [&_button]:[border:0] [&_button]:[border-radius:3px] [&_button]:[background:transparent] [&_button]:[color:#68768b] [&_button]:[font-size:10px] [&_button.selected]:[color:black] [&_button.selected]:[background:white]",
  chart:
    "[position:relative] [height:200px] [padding:10px_4px_19px_45px] [&_svg]:[height:170px] [&_svg]:[width:100%] [&_svg]:[overflow:visible] max-[760px]:[height:150px] max-[760px]:[padding:8px_0_0] max-[760px]:[&_.y-axis]:[display:none] max-[760px]:[&_.x-axis]:[display:none] max-[760px]:[&_.desktop-revenue-chart]:[display:none]",
  "chart-grid":
    "[&_path]:[stroke:#e7ecf3] [&_path]:[stroke-dasharray:3_5] [&_path]:[stroke-width:1]",
  "y-axis":
    "[position:absolute] [left:0] [top:4px] [bottom:27px] [display:flex] [flex-direction:column] [justify-content:space-between] [color:#8995a8] [font-size:9px]",
  "x-axis":
    "[position:absolute] [bottom:0] [left:45px] [right:3px] [display:flex] [justify-content:space-around] [color:#8995a8] [font-size:9px]",
  "side-widgets":
    "[display:grid] [gap:14px] max-[760px]:[grid-template-columns:1fr] max-[760px]:[gap:9px] max-[420px]:[grid-template-columns:1fr]",
  "alert-row":
    "[display:flex] [align-items:flex-start] [gap:9px] [padding:8px_0] [border-bottom:1px_solid_#f0f2f6] [&:last-child]:[border-bottom:0] [&_b]:[display:block] [&_small]:[display:block] [&_b]:[font-size:10px] [&_small]:[font-size:9px] [&_small]:[color:#8995a8] [&_small]:[margin-top:3px] max-[760px]:[&_b]:[font-size:9px]",
  dot: "[width:7px] [height:7px] [border-radius:50%] [background:#f1a93a] [margin-top:3px] [flex:none]",
  "dot-0": "[background:#ef4444]",
  "dot-1": "[background:#e7a300]",
  "dot-2": "[background:#38bdf8]",
  "table-wrap":
    "[width:100%] [overflow-x:auto] max-[760px]:[&_table]:[min-width:680px]",
  "table-person":
    "[display:flex] [align-items:center] [gap:8px] [&_small]:[display:block] [&_small]:[color:#8793a5] [&_small]:[font-size:9px] [&_small]:[margin-top:2px] [position:relative] [width:max-content] [&_.avatar:not(.avatar-fallback)]:[position:relative] [&_.avatar:not(.avatar-fallback)]:[z-index:1]",
  badge:
    "[display:inline-block] [padding:4px_7px] [border-radius:10px] [font-size:9px] [font-weight:600] [background:#e1f7ec] [color:#138354] [&.pending]:[background:#fff2d6] [&.pending]:[color:#a66b00] [&.failed]:[background:#ffe5e5] [&.cancelled]:[background:#ffe5e5] [&.suspended]:[background:#ffe5e5] [&.failed]:[color:#c63c3c] [&.cancelled]:[color:#c63c3c] [&.suspended]:[color:#c63c3c] [&.refunded]:[background:#edf0f5] [&.refunded]:[color:#5e6c7f] [&.inactive]:[background:#fff0d6] [&.inactive]:[color:#a66b00] [&.active]:[background:#ddf7eb] [&.active]:[color:#138354] [&.confirmed]:[background:#ddf7eb] [&.paid]:[background:#ddf7eb] [&.confirmed]:[color:#138354] [&.paid]:[color:#138354] [&.completed]:[background:#e4efff] [&.completed]:[color:#315fc1] [&.admin]:[background:#e4efff] [&.admin]:[color:#315fc1] [&.editor]:[background:#ddf7eb] [&.editor]:[color:#138354] [&.viewer]:[background:#edf0f5] [&.viewer]:[color:#5e6c7f] [&.payment]:[background:#e4efff] [&.payment]:[color:#315fc1] [&.refund]:[background:#ffe5e5] [&.refund]:[color:#c63c3c] [&.transfer]:[background:#e8f5f2] [&.transfer]:[color:#167a67]",
  "plain-action":
    "[border:0] [background:transparent] [color:#52637a] [font-size:15px] [padding:3px_5px]",
  "red-text": "[color:#e04444]",
  "link-button":
    "[border:0] [background:transparent] [color:#4f46e5] [font-size:10px] [font-weight:600] [margin-top:11px] [padding:4px_0]",
  pagination:
    "[display:flex] [align-items:center] [justify-content:space-between] [padding-top:12px] [color:#7a879a] [font-size:10px] [&_b]:[color:#36445a] [&>div]:[display:flex] [&>div]:[gap:6px] [&_button]:[padding:6px_10px] [&_button]:[background:#fff] [&_button]:[border:1px_solid_#e4eaf1] [&_button]:[border-radius:5px] [&_button]:[font-size:10px] [&_button:disabled]:[opacity:0.45] [&_button:disabled]:[cursor:not-allowed] max-[760px]:[font-size:9px]",
  "dashboard-pagination":
    "[display:flex] [align-items:center] [justify-content:space-between] [gap:8px] [padding-top:12px] [color:#7a879a] [font-size:10px] [&_b]:[color:#36445a] [&>div]:[display:flex] [&>div]:[align-items:center] [&>div]:[gap:7px] [&_button]:[padding:5px_8px] [&_button]:[background:#fff] [&_button]:[border:1px_solid_#e4eaf1] [&_button]:[border-radius:5px] [&_button]:[font-size:9px] [&_button:disabled]:[opacity:0.45] [&_button:disabled]:[cursor:not-allowed]",
  "users-metrics":
    "[width:100%] [grid-template-columns:repeat(3,_minmax(0,_1fr))] [margin-bottom:14px] max-[760px]:[grid-template-columns:repeat(3,_minmax(0,_1fr))] max-[760px]:[gap:7px] max-[760px]:[&_.metric]:[padding:10px] max-[760px]:[&_.metric-top]:[font-size:9px] max-[760px]:[&_.metric-icon]:[width:20px] max-[760px]:[&_.metric-icon]:[height:20px] max-[760px]:[&_.metric>strong]:[font-size:16px] max-[760px]:[&_.metric-foot_small]:[display:none] max-[420px]:[&_.metric-foot>span]:[font-size:8px] max-[420px]:[&_.metric-foot>span]:[padding:2px]",
  "directory-card": "[padding:0_15px_13px] max-[760px]:[padding:0_10px_12px]",
  "user-toolbar":
    "[flex-wrap:nowrap] [&_.sort-label]:[margin-left:auto] [&_.sort-label]:[white-space:nowrap] [&_.sort-label_select]:[width:125px] max-[760px]:[flex-wrap:wrap] max-[760px]:[min-height:48px] max-[760px]:[&_.user-sort-label-hook]:[display:none] max-[760px]:[&+.bulk-bar]:[display:none]",
  "user-filters":
    "[display:flex] [align-items:center] [gap:9px] [flex:1] [min-width:0] [&_input]:[flex:1] [&_input]:[max-width:310px] [&_select]:[width:112px] max-[760px]:[flex-wrap:wrap] max-[760px]:[width:100%] max-[760px]:[gap:7px] max-[760px]:[&_input]:[flex:1_1_0] max-[760px]:[&_input]:[flex-basis:0] max-[760px]:[&_input]:[width:auto] max-[760px]:[&_input]:[min-width:0] max-[760px]:[&_input]:[max-width:none] max-[760px]:[&>button:not(.user-filter-toggle-hook)]:[display:none] max-[760px]:[&_input]:[padding-left:29px] max-[760px]:[&_input]:[background-image:url(\"data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='16'_height='16'_viewBox='0_0_16_16'_fill='none'_stroke='%238995a8'_stroke-width='1.5'%3E%3Ccircle_cx='7'_cy='7'_r='4.5'/%3E%3Cpath_d='m10.5_10.5_3_3'/%3E%3C/svg%3E\")] max-[760px]:[&_input]:[background-repeat:no-repeat] max-[760px]:[&_input]:[background-position:10px_center] max-[760px]:[&_input]:[background-size:12px]",
  "transaction-filters":
    "[display:flex] [align-items:center] [gap:9px] [flex:1] [min-width:0] [&_input]:[flex:1] [&_input]:[max-width:260px] [&_input]:[min-width:160px] [&_select]:[width:120px] max-[760px]:[flex-wrap:wrap] max-[760px]:[width:100%] max-[760px]:[&_input]:[flex-basis:100%] max-[760px]:[&_input]:[max-width:none] max-[760px]:[&_select]:[display:none] max-[760px]:[&_.desktop-filter-selects]:[display:none] max-[760px]:[&_select]:[flex:1] max-[760px]:[&_select]:[min-width:95px] max-[760px]:[&_input]:[flex:1_1_0] max-[760px]:[&_input]:[flex-basis:0] max-[760px]:[&_input]:[width:auto] max-[760px]:[&_input]:[min-width:0] max-[760px]:[&_input]:[padding-left:29px] max-[760px]:[&_input]:[background-image:url(\"data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='16'_height='16'_viewBox='0_0_16_16'_fill='none'_stroke='%238995a8'_stroke-width='1.5'%3E%3Ccircle_cx='7'_cy='7'_r='4.5'/%3E%3Cpath_d='m10.5_10.5_3_3'/%3E%3C/svg%3E\")] max-[760px]:[&_input]:[background-repeat:no-repeat] max-[760px]:[&_input]:[background-position:10px_center] max-[760px]:[&_input]:[background-size:12px]",
  "booking-toolbar":
    "[display:flex] [align-items:center] [justify-content:space-between] [flex-wrap:nowrap] [&_.export-button]:[margin-left:12px] [&_input]:[min-width:0] [&_input]:[width:auto] max-[760px]:[display:flex] max-[760px]:[flex-wrap:wrap] max-[760px]:[&_.export-button]:[display:none]",
  "booking-filters":
    "[display:flex] [align-items:center] [gap:9px] [flex:1] [min-width:0] [&_input]:[flex:1] [&_input]:[max-width:260px] [&_input]:[min-width:160px] [&_select]:[width:140px] max-[760px]:[flex-wrap:wrap] max-[760px]:[width:100%] max-[760px]:[&_input]:[flex-basis:100%] max-[760px]:[&_input]:[max-width:none] max-[760px]:[&_select]:[display:none] max-[760px]:[&_.desktop-filter-selects]:[display:none] max-[760px]:[&_input]:[flex:1_1_0] max-[760px]:[&_input]:[flex-basis:0] max-[760px]:[&_input]:[width:auto] max-[760px]:[&_input]:[min-width:0] max-[760px]:[&_input]:[padding-left:29px] max-[760px]:[&_input]:[background-image:url(\"data:image/svg+xml,%3Csvg_xmlns='http://www.w3.org/2000/svg'_width='16'_height='16'_viewBox='0_0_16_16'_fill='none'_stroke='%238995a8'_stroke-width='1.5'%3E%3Ccircle_cx='7'_cy='7'_r='4.5'/%3E%3Cpath_d='m10.5_10.5_3_3'/%3E%3C/svg%3E\")] max-[760px]:[&_input]:[background-repeat:no-repeat] max-[760px]:[&_input]:[background-position:10px_center] max-[760px]:[&_input]:[background-size:12px]",
  "transaction-success":
    "[position:relative] [min-width:0] [&_.metric]:[height:100%] [&_.metric]:[padding-right:62px] [&_.metric>strong]:[color:#078a62] [&_svg]:[position:absolute] [&_svg]:[top:34px] [&_svg]:[right:14px] [&_svg]:[width:42px] [&_svg]:[height:23px] [&_svg]:[overflow:visible] [&_polyline]:[fill:none] [&_polyline]:[stroke:#12a878] [&_polyline]:[stroke-width:1.6]",
  "export-button":
    "[height:34px] [white-space:nowrap] [display:inline-flex] [align-items:center] [justify-content:center] [gap:7px] ![border:1px_solid_#d5deeb] [border-radius:6px] [&_img]:[width:15px] [&_img]:[height:15px] [&_img]:[object-fit:contain] max-[760px]:[flex:none]",
  "table-actions":
    "[display:inline-flex] [align-items:center] [gap:6px] [&_img]:[width:14px] [&_img]:[height:14px] [&_img]:[object-fit:contain]",
  "mobile-booking-actions":
    "[display:inline-flex] [align-items:center] [gap:7px] [font-size:0] [&_img]:[width:14px] [&_img]:[height:14px] [&_img]:[object-fit:contain]",
  "transaction-type-hook": "![width:150px] ![flex:0_0_150px]",
  "avatar-fallback": "[position:absolute] [z-index:0]",
  "bulk-bar":
    "[background:#f0f1ff] [border:1px_solid_#d5d8ff] [border-radius:5px] [padding:9px_10px] [color:#4f46e5] [font-size:10px] [font-weight:600] [display:flex] [justify-content:space-between] [align-items:center] [margin-bottom:10px] [&>div]:[display:flex] [&>div]:[gap:8px] [&_.secondary]:[padding:6px_9px] [&_.danger]:[padding:6px_9px] [&_.secondary]:[font-size:9px] [&_.danger]:[font-size:9px] [&_.bulk-role-button]:[color:#334155] [&_.bulk-suspend-button]:[color:#ef4444] max-[760px]:[font-size:9px] max-[760px]:[&>div]:[gap:4px] max-[760px]:[&_.secondary]:[padding:6px] max-[760px]:[&_.danger]:[padding:6px] max-[420px]:[flex-wrap:wrap] max-[420px]:[gap:7px]",
  role: "[color:#536178] [font-size:10px]",
  "amount-value": "[color:#172238] [font-weight:600]",
  "amount-negative": "[color:#d83e3e] [font-weight:600]",
  "state-box":
    "[min-height:190px] [display:flex] [align-items:center] [justify-content:center] [gap:10px] [color:#77849a] [font-size:12px] [flex-direction:column]",
  "error-state": "[color:#c24141]",
  spinner:
    "[width:20px] [height:20px] [border:2px_solid_#dfe3ef] [border-top-color:#4f46e5] [border-radius:50%] animate-spin",
  "empty-cell": "[text-align:center] [height:150px] [color:#7b8799]",
  "mobile-filter-toggle":
    "[display:none] max-[760px]:[display:grid] max-[760px]:[place-items:center] max-[760px]:[flex:0_0_34px] max-[760px]:[height:34px] max-[760px]:[border:1px_solid_#e4eaf1] max-[760px]:[border-radius:5px] max-[760px]:[background:#fff] max-[760px]:[color:#526176] max-[760px]:[width:34px]",
  "filter-icon-button":
    "[display:none] max-[760px]:[display:grid] max-[760px]:[place-items:center] max-[760px]:[flex:0_0_34px] max-[760px]:[width:34px] max-[760px]:[height:34px] max-[760px]:[border:1px_solid_#e4eaf1] max-[760px]:[border-radius:5px] max-[760px]:[background:#fff] max-[760px]:[color:#526176]",
  "mobile-page-action":
    "[display:none] max-[760px]:[display:block] max-[760px]:[width:100%] max-[760px]:[max-width:360px] max-[760px]:[min-height:35px] max-[760px]:[margin:8px_auto_10px] max-[760px]:[text-align:center] max-[760px]:[order:3]",
  "desktop-filter-selects": "[display:contents]",
  "mobile-dashboard-transactions":
    "[display:none] max-[760px]:[display:grid] max-[760px]:[&_.mobile-transaction-card]:[min-height:58px] max-[760px]:[&_.mobile-transaction-card]:[border:1px_solid_#e4eaf1] max-[760px]:[&_.mobile-transaction-card]:[border-radius:6px] max-[760px]:[&_.mobile-transaction-card]:[background:#fff] max-[760px]:[&_.mobile-transaction-card]:[padding:9px] max-[760px]:[gap:7px]",
  "mobile-user-list":
    "[display:none] max-[760px]:[display:grid] max-[760px]:[gap:8px]",
  "mobile-transaction-list":
    "[display:none] max-[760px]:[display:grid] max-[760px]:[gap:8px]",
  "mobile-booking-list":
    "[display:none] max-[760px]:[display:grid] max-[760px]:[gap:8px]",
  "mobile-revenue-chart":
    "[display:none] max-[760px]:[display:grid] max-[760px]:[grid-template-columns:repeat(6,_minmax(0,_1fr))] max-[760px]:[align-items:end] max-[760px]:[gap:4px] max-[760px]:[height:62px] max-[760px]:[padding:3px_3px_0] max-[760px]:[border-bottom:1px_solid_#e4eaf1] max-[760px]:[&>div]:[display:flex] max-[760px]:[&>div]:[flex-direction:column] max-[760px]:[&>div]:[align-items:center] max-[760px]:[&>div]:[justify-content:end] max-[760px]:[&>div]:[gap:5px] max-[760px]:[&>div]:[height:100%] max-[760px]:[&_small]:[color:#8995a8] max-[760px]:[&_small]:[font-size:9px]",
  "detail-page":
    "[display:grid] [align-content:start] [gap:14px] [&:has(.calendar-mark)_.detail-stack:first-child_.detail-card:first-child_.detail-lines_span:last-child]:[display:grid] [&:has(.calendar-mark)_.detail-stack:first-child_.detail-card:first-child_.detail-lines_span:last-child]:[grid-template-columns:1fr] [&:has(.calendar-mark)_.detail-stack:first-child_.detail-card:first-child_.detail-lines_span:last-child]:[gap:6px] [&:has(.calendar-mark)_.detail-stack:first-child_.detail-card:first-child_.detail-lines_span:last-child_b]:[text-align:left] min-[1101px]:[&:has(.detail-avatar)_.detail-stack:nth-child(1)_.detail-card:nth-child(2)_.detail-lines_span:last-child_.badge]:[min-width:64px] min-[1101px]:[&:has(.detail-avatar)_.detail-stack:nth-child(1)_.detail-card:nth-child(2)_.detail-lines_span:last-child_.badge]:[padding:7px_14px] min-[1101px]:[&:has(.detail-avatar)_.detail-stack:nth-child(1)_.detail-card:nth-child(2)_.detail-lines_span:last-child_.badge]:[text-align:center] max-[760px]:[gap:9px] max-[760px]:[&>.back-button]:[min-height:28px] max-[760px]:[&>.back-button]:[padding:5px_0] max-[760px]:[&>.back-button]:[font-size:10px] max-[760px]:[&_.detail-hero]:[min-height:0] max-[760px]:[&_.detail-hero]:[padding:12px] max-[760px]:[&_.detail-hero]:[gap:8px] max-[760px]:[&_.detail-hero]:[border-radius:6px] max-[760px]:[&_.detail-hero_h1]:[font-size:13px] max-[760px]:[&_.detail-hero_p]:[font-size:9px] max-[760px]:[&_.detail-hero_p]:[line-height:1.4] max-[760px]:[&_.detail-hero_.detail-actions]:[display:grid] max-[760px]:[&_.detail-hero_.detail-actions]:[grid-template-columns:repeat(2,_minmax(0,_1fr))] max-[760px]:[&_.detail-hero_.detail-actions]:[gap:7px] max-[760px]:[&_.detail-hero_.detail-actions>button]:[min-width:0] max-[760px]:[&_.detail-hero_.detail-actions>button]:[padding:8px_5px] max-[760px]:[&_.detail-hero_.detail-actions>button]:[font-size:9px] max-[760px]:[&_.detail-card]:[min-width:0] max-[760px]:[&_.detail-card]:[padding:11px] max-[760px]:[&_.detail-card_h2]:[margin-bottom:7px] max-[760px]:[&_.detail-card_h2]:[font-size:11px] max-[760px]:[&_.detail-lines]:[margin:0] max-[760px]:[&_.detail-lines_span]:[align-items:flex-start] max-[760px]:[&_.detail-lines_span]:[gap:8px] max-[760px]:[&_.detail-lines_span]:[padding:8px_0] max-[760px]:[&_.detail-lines_span]:[font-size:9px] max-[760px]:[&_.detail-lines_b]:[max-width:62%] max-[760px]:[&_.detail-lines_b]:[overflow-wrap:anywhere] max-[760px]:[&_.detail-lines_b]:[text-align:right] max-[760px]:[&_.detail-lines_b]:[font-size:9px] max-[760px]:[&_.detail-lines_.badge]:[flex:none] max-[760px]:[&_.detail-avatar]:[width:54px] max-[760px]:[&_.detail-avatar]:[height:54px] max-[760px]:[&:has(.detail-avatar)>.detail-hero]:[display:grid] max-[760px]:[&:has(.detail-avatar)>.detail-hero]:[grid-template-columns:1fr_1fr] max-[760px]:[&:has(.detail-avatar)>.detail-hero]:[justify-items:center] max-[760px]:[&:has(.detail-avatar)>.detail-hero]:[text-align:center] max-[760px]:[&:has(.detail-avatar)>.detail-hero>.detail-avatar]:[grid-column:1_/_-1] max-[760px]:[&:has(.detail-avatar)>.detail-hero>div]:[grid-column:1_/_-1] max-[760px]:[&:has(.detail-avatar)>.detail-hero>.detail-actions]:[grid-column:1_/_-1] max-[760px]:[&:has(.detail-avatar)>.detail-hero>.badge]:[justify-self:center] max-[760px]:[&:has(.back-mark:not(.calendar-mark))>.detail-hero]:[display:grid] max-[760px]:[&:has(.calendar-mark)>.detail-hero]:[display:grid] max-[760px]:[&:has(.back-mark:not(.calendar-mark))>.detail-hero]:[grid-template-columns:repeat(2,_minmax(0,_1fr))] max-[760px]:[&:has(.calendar-mark)>.detail-hero]:[grid-template-columns:repeat(2,_minmax(0,_1fr))] max-[760px]:[&:has(.back-mark:not(.calendar-mark))>.detail-hero]:[justify-items:center] max-[760px]:[&:has(.calendar-mark)>.detail-hero]:[justify-items:center] max-[760px]:[&:has(.back-mark:not(.calendar-mark))>.detail-hero]:[text-align:center] max-[760px]:[&:has(.calendar-mark)>.detail-hero]:[text-align:center] max-[760px]:[&:has(.back-mark:not(.calendar-mark))>.detail-hero>.back-mark]:[grid-column:1_/_-1] max-[760px]:[&:has(.calendar-mark)>.detail-hero>.calendar-mark]:[grid-column:1_/_-1] max-[760px]:[&:has(.back-mark:not(.calendar-mark))>.detail-hero>.back-mark]:[justify-self:start] max-[760px]:[&:has(.calendar-mark)>.detail-hero>.calendar-mark]:[justify-self:start] max-[760px]:[&:has(.back-mark:not(.calendar-mark))>.detail-hero>div]:[grid-column:1_/_-1] max-[760px]:[&:has(.calendar-mark)>.detail-hero>div]:[grid-column:1_/_-1] max-[760px]:[&:has(.back-mark:not(.calendar-mark))>.detail-hero>.detail-actions]:[grid-column:1_/_-1] max-[760px]:[&:has(.calendar-mark)>.detail-hero>.detail-actions]:[grid-column:1_/_-1] max-[760px]:[&:has(.back-mark:not(.calendar-mark))>.detail-hero>div]:[display:grid] max-[760px]:[&:has(.back-mark:not(.calendar-mark))>.detail-hero>div]:[justify-items:center] max-[760px]:[&_.related-ledger]:[display:none] max-[760px]:[&_.activity-item]:[padding:8px_0_8px_13px] max-[760px]:[&_.activity-item]:[font-size:9px] max-[760px]:[&_.activity-item_small]:[font-size:8px] max-[760px]:[&_.table-wrap]:[max-width:100%] max-[760px]:[&_.table-wrap]:[overflow-x:auto] max-[760px]:[&_.table-wrap_table]:[min-width:500px] max-[760px]:[&_.detail-bottom-grid_table]:[min-width:0] max-[760px]:[&_.detail-bottom-grid_table]:[width:100%] max-[760px]:[&_.detail-bottom-grid_table]:[table-layout:fixed] max-[760px]:[&_.detail-bottom-grid_th]:[padding:4px_3px] max-[760px]:[&_.detail-bottom-grid_td]:[padding:4px_3px] max-[760px]:[&_.detail-bottom-grid_th]:[font-size:8px] max-[760px]:[&_.detail-bottom-grid_td]:[font-size:8px] max-[760px]:[&:has(.calendar-mark)_.detail-hero_p]:[display:none] max-[760px]:[&:has(.calendar-mark)_.detail-stack:first-child_.detail-card:first-child_.detail-lines_span:last-child]:[display:grid] max-[760px]:[&:has(.calendar-mark)_.detail-stack:first-child_.detail-card:first-child_.detail-lines_span:last-child]:[grid-template-columns:1fr] max-[760px]:[&:has(.calendar-mark)_.detail-stack:first-child_.detail-card:first-child_.detail-lines_span:last-child]:[gap:5px] max-[760px]:[&:has(.calendar-mark)_.detail-stack:first-child_.detail-card:first-child_.detail-lines_span:last-child_b]:[max-width:100%] max-[760px]:[&:has(.calendar-mark)_.detail-stack:first-child_.detail-card:first-child_.detail-lines_span:last-child_b]:[text-align:left]",
  "back-button":
    "[justify-self:start] [border:0] [background:none] [color:#4f46e5] [padding:4px_0] [font-size:11px] [font-weight:600]",
  "detail-hero":
    "[min-height:76px] [padding:14px_17px] [display:flex] [align-items:center] [gap:12px] [&_h1]:[margin:0_0_4px] [&_h1]:[font-size:17px] [&_p]:[margin:0] [&_p]:[color:#718096] [&_p]:[font-size:10px] [&_.detail-actions]:[margin-left:auto] [&_.detail-actions]:[display:flex] [&_.detail-actions]:[gap:8px] [&_.detail-avatar]:[margin:0] [&_.detail-avatar]:[flex:none] max-[760px]:[flex-wrap:wrap] max-[760px]:[&_.detail-actions]:[width:100%] max-[760px]:[&_.detail-actions]:[margin-left:0]",
  "back-mark":
    "[width:34px] [height:34px] [border:0] [border-radius:50%] [display:grid] [place-items:center] [flex:none] [color:#16825b] [background:#d9f6eb]",
  "booking-note-copy": "![font-weight:400] [color:#526176]",
  "detail-columns":
    "[display:grid] [grid-template-columns:minmax(0,_1.5fr)_minmax(230px,_0.8fr)] [gap:14px] [align-items:start] max-[760px]:[grid-template-columns:1fr] max-[760px]:[gap:9px]",
  "detail-bottom-grid":
    "[display:grid] [grid-template-columns:repeat(2,_minmax(0,_1fr))] [gap:14px] max-[760px]:[grid-template-columns:1fr] max-[760px]:[gap:9px]",
  "detail-stack": "[display:grid] [gap:14px] max-[760px]:[gap:9px]",
  "detail-card":
    "[padding:15px] [&_h2]:[margin:0_0_10px] [&_h2]:[font-size:13px]",
  "detail-avatar":
    "[width:70px] [height:70px] [border-radius:50%] [object-fit:cover] [flex:none]",
  "detail-mobile-amount":
    "[display:none] max-[760px]:[display:block] max-[760px]:[margin:4px_0_2px] max-[760px]:[font-size:19px] max-[760px]:[line-height:1.1] max-[760px]:[color:#172238]",
  "detail-breadcrumb":
    "[min-height:26px] [display:flex] [align-items:center] [gap:7px] [color:#718096] [font-size:10px] [&_button]:[border:0] [&_button]:[padding:0] [&_button]:[background:transparent] [&_button]:[color:#526176] [&_button]:[font-size:inherit] [&_strong]:[color:#172238] [&_strong]:[font-weight:600] max-[760px]:[min-height:30px] max-[760px]:[margin-bottom:1px] max-[760px]:[font-size:10px]",
  "detail-edit-icon":
    "[margin-left:auto] [width:27px] [height:27px] [border:1px_solid_#e4eaf1] [border-radius:50%] [color:#526176] [font-size:13px] max-[760px]:[margin-left:auto]",
  "detail-top-icon":
    "[margin-left:auto] [width:27px] [height:27px] [border:1px_solid_#e4eaf1] [border-radius:50%] [color:#526176]",
  "detail-lines":
    "[display:grid] [text-align:left] [margin:20px_0] [&_span]:[padding:10px_0] [&_span]:[border-bottom:1px_solid_#e4eaf1] [&_span]:[font-size:11px] [&_span]:[color:#718096] [&_span]:[display:flex] [&_span]:[justify-content:space-between] [&_span]:[gap:12px] [&_b]:[color:#29364c]",
  "activity-item":
    '[position:relative] [display:grid] [gap:4px] [padding:10px_0_10px_14px] [border-top:1px_solid_#edf0f4] [font-size:10px] [&::before]:[content:""] [&::before]:[position:absolute] [&::before]:[top:14px] [&::before]:[left:0] [&::before]:[width:6px] [&::before]:[height:6px] [&::before]:[border-radius:50%] [&::before]:[background:#4f46e5] [&_small]:[color:#8793a5] [&_small]:[font-size:9px] max-[760px]:[&::after]:[content:""] max-[760px]:[&::after]:[position:absolute] max-[760px]:[&::after]:[top:20px] max-[760px]:[&::after]:[bottom:-2px] max-[760px]:[&::after]:[left:2.5px] max-[760px]:[&::after]:[border-left:1px_solid_#dce4ef] max-[760px]:[&:last-child::after]:[display:none]',
  "customer-summary": "[&_.detail-lines]:[margin:0]",
  "customer-row":
    "[display:flex] [align-items:center] [gap:10px] [padding:5px_0] [&>span:nth-child(2)]:[display:grid] [&>span:nth-child(2)]:[gap:4px] [&_b]:[font-size:10px] [&_small]:[color:#8793a5] [&_small]:[font-size:9px]",
  "booking-count": "[margin-left:auto]",
  "total-amount": "[color:#4f46e5] [font-size:16px]",
  "link-value": "[color:#4f46e5]",
  "calendar-mark":
    "[display:grid] [place-items:center] [color:#4f46e5] [background:#eff0ff]",
  "main-dashboard": "max-[760px]:[&_.dashboard-welcome-hook]:[display:grid]",
  "dashboard-page": "",
  "page-heading-users":
    "max-[760px]:[&_.primary]:[display:none] max-[760px]:[display:none]",
  "page-heading-bookings":
    "max-[760px]:[&_.primary]:[display:none] max-[760px]:[display:none]",
  "revenue-bar":
    "max-[760px]:[width:min(24px,_70%)] max-[760px]:[height:100%] max-[760px]:[flex:none] max-[760px]:[display:flex] max-[760px]:[align-items:end] max-[760px]:[background:transparent] max-[760px]:[border-radius:3px_3px_0_0] max-[760px]:[&_i]:[display:block] max-[760px]:[&_i]:[width:100%] max-[760px]:[&_i]:[min-height:8px] max-[760px]:[&_i]:[background:#635bdb] max-[760px]:[&_i]:[border-radius:3px_3px_0_0]",
  "filter-funnel":
    "max-[760px]:[display:block] max-[760px]:[width:13px] max-[760px]:[height:12px] max-[760px]:[background:#66758b] max-[760px]:[clip-path:polygon(0_0,_100%_0,_62%_46%,_62%_100%,_38%_82%,_38%_46%)]",
  "dashboard-desktop-table": "max-[760px]:[display:none]",
  "user-desktop-table": "max-[760px]:[display:none]",
  "transaction-desktop-table": "max-[760px]:[display:none]",
  "booking-desktop-table": "max-[760px]:[display:none]",
  "mobile-transaction-card":
    "max-[760px]:[width:100%] max-[760px]:[min-height:66px] max-[760px]:[border:1px_solid_#e4eaf1] max-[760px]:[border-radius:6px] max-[760px]:[background:#fff] max-[760px]:[display:flex] max-[760px]:[align-items:center] max-[760px]:[gap:10px] max-[760px]:[padding:10px] max-[760px]:[text-align:left] max-[760px]:[&_.mobile-record-end]:[gap:5px] max-[760px]:[&_.mobile-record-end_.badge]:[font-size:8px]",
  "mobile-booking-card":
    "max-[760px]:[width:100%] max-[760px]:[min-height:66px] max-[760px]:[border:1px_solid_#e4eaf1] max-[760px]:[border-radius:6px] max-[760px]:[background:#fff] max-[760px]:[display:flex] max-[760px]:[align-items:center] max-[760px]:[gap:10px] max-[760px]:[padding:10px] max-[760px]:[text-align:left]",
  "mobile-user-card":
    "max-[760px]:[width:100%] max-[760px]:[min-height:66px] max-[760px]:[border:1px_solid_#e4eaf1] max-[760px]:[border-radius:6px] max-[760px]:[background:#fff] max-[760px]:[display:flex] max-[760px]:[align-items:center] max-[760px]:[gap:10px] max-[760px]:[padding:10px] max-[760px]:[text-align:left] max-[760px]:[display:grid] max-[760px]:[grid-template-columns:30px_minmax(0,_1fr)_auto] max-[760px]:[grid-template-rows:auto_auto] max-[760px]:[gap:4px_8px] max-[760px]:[min-height:48px] max-[760px]:[padding:6px] max-[760px]:[&>span:first-child]:[grid-column:1] max-[760px]:[&>span:first-child]:[grid-row:1_/_3] max-[760px]:[&>span:nth-child(2)]:[grid-column:2] max-[760px]:[&>span:nth-child(2)]:[grid-row:1] max-[760px]:[&>span:nth-child(3)]:[grid-column:3] max-[760px]:[&>span:nth-child(3)]:[grid-row:1] max-[760px]:[&>span:nth-child(4)]:[display:none] max-[760px]:[&>span:nth-child(5)]:[grid-column:2] max-[760px]:[&>span:nth-child(5)]:[grid-row:2] max-[760px]:[&>small:last-child]:[grid-column:3] max-[760px]:[&>small:last-child]:[grid-row:2] max-[760px]:[&>span:nth-child(5)]:[justify-content:flex-start] max-[760px]:[&_.badge]:[padding:2px_5px] max-[760px]:[&_.badge]:[font-size:6px]",
  "mobile-record-avatar":
    "max-[760px]:[width:30px] max-[760px]:[height:30px] max-[760px]:[flex:0_0_30px] max-[760px]:[border-radius:50%] max-[760px]:[object-fit:cover] max-[760px]:[display:grid] max-[760px]:[place-items:center] max-[760px]:[background:#e5e9f7] max-[760px]:[color:#394579] max-[760px]:[font-size:10px] max-[760px]:[font-weight:700]",
  "mobile-record-main":
    "max-[760px]:[flex:1] max-[760px]:[min-width:0] max-[760px]:[display:grid] max-[760px]:[gap:4px] max-[760px]:[&_b]:[color:#253149] max-[760px]:[&_b]:[font-size:11px] max-[760px]:[&_b]:[overflow:hidden] max-[760px]:[&_b]:[text-overflow:ellipsis] max-[760px]:[&_small]:[color:#8793a5] max-[760px]:[&_small]:[font-size:9px] max-[760px]:[&_small]:[overflow:hidden] max-[760px]:[&_small]:[text-overflow:ellipsis] max-[760px]:[&_small]:[white-space:nowrap] max-[760px]:[&_.badge]:[padding:3px_6px] max-[760px]:[&_.badge]:[font-size:8px]",
  "mobile-record-end":
    "max-[760px]:[&_.badge]:[padding:3px_6px] max-[760px]:[&_.badge]:[font-size:8px] max-[760px]:[display:grid] max-[760px]:[justify-items:end] max-[760px]:[gap:5px] max-[760px]:[flex:none] max-[760px]:[&>b]:[font-size:11px] max-[760px]:[&>b]:[color:#253149]",
  "mobile-user-badges":
    "max-[760px]:[display:flex] max-[760px]:[flex-wrap:wrap] max-[760px]:[justify-content:start] max-[760px]:[gap:4px]",
  "mobile-user-actions":
    "max-[760px]:[display:flex] max-[760px]:[gap:9px] max-[760px]:[color:#64748b] max-[760px]:[font-size:12px]",
  "mobile-user-heading":
    "max-[760px]:[grid-column:2] max-[760px]:[grid-row:1] max-[760px]:[display:grid] max-[760px]:[min-width:0] max-[760px]:[gap:3px] max-[760px]:[&_b]:[color:#253149] max-[760px]:[&_b]:[font-size:11px] max-[760px]:[&_small]:[color:#8793a5] max-[760px]:[&_small]:[font-size:9px] max-[760px]:[&_small]:[overflow:hidden] max-[760px]:[&_small]:[text-overflow:ellipsis] max-[760px]:[&_small]:[white-space:nowrap]",
  "mobile-user-divider":
    "max-[760px]:[grid-column:1_/_-1] max-[760px]:[grid-row:2] max-[760px]:[display:block] max-[760px]:[width:100%] max-[760px]:[height:1px] max-[760px]:[background:#dce4ef]",
  "mobile-user-last-active":
    "max-[760px]:[grid-column:3] max-[760px]:[grid-row:3] max-[760px]:[justify-self:end] max-[760px]:[color:#8995a8] max-[760px]:[font-size:8px] max-[760px]:[white-space:nowrap]",
  "mobile-transaction-dot":
    "max-[760px]:[color:#45556d] max-[760px]:[font-size:8px]",
  "mobile-structured-card":
    "max-[760px]:[display:grid] max-[760px]:[grid-template-columns:minmax(0,_1fr)] max-[760px]:[gap:8px] max-[760px]:[padding:9px]",
  "mobile-listing-top":
    "max-[760px]:[display:flex] max-[760px]:[align-items:center] max-[760px]:[justify-content:space-between] max-[760px]:[gap:8px] max-[760px]:[font-size:10px] max-[760px]:[&>b]:[color:#253149]",
  "mobile-listing-divider":
    "max-[760px]:[display:block] max-[760px]:[width:100%] max-[760px]:[height:1px] max-[760px]:[background:#e4eaf1]",
  "mobile-listing-body":
    "max-[760px]:[display:flex] max-[760px]:[align-items:center] max-[760px]:[gap:9px] max-[760px]:[min-width:0] max-[760px]:[&_.mobile-record-main]:[gap:4px] max-[760px]:[&_.mobile-record-end]:[gap:5px] max-[760px]:[&_.mobile-record-end>b]:[font-size:10px]",
  "mobile-eye": "max-[760px]:[color:#617086] max-[760px]:[font-size:13px]",
  "profile-page": "max-[760px]:[display:grid] max-[760px]:[gap:10px]",
  "profile-identity":
    "max-[760px]:[display:flex] max-[760px]:[align-items:center] max-[760px]:[gap:10px] max-[760px]:[padding:14px] max-[760px]:[&_h2]:[margin:0_0_4px] max-[760px]:[&_h2]:[font-size:13px] max-[760px]:[&_p]:[margin:0_0_5px] max-[760px]:[&_p]:[color:#718096] max-[760px]:[&_p]:[font-size:10px] max-[760px]:[&_span:not(.avatar)]:[color:#4f46e5] max-[760px]:[&_span:not(.avatar)]:[font-size:9px] max-[760px]:[&_.secondary]:[margin-left:auto]",
  "profile-avatar": "max-[760px]:[flex:none]",
  "profile-details":
    "max-[760px]:[padding:14px] max-[760px]:[&_h2]:[margin:0_0_10px] max-[760px]:[&_h2]:[font-size:12px] max-[760px]:[&_dl]:[margin:0] max-[760px]:[&_dl>div]:[display:flex] max-[760px]:[&_dl>div]:[justify-content:space-between] max-[760px]:[&_dl>div]:[gap:12px] max-[760px]:[&_dl>div]:[padding:9px_0] max-[760px]:[&_dl>div]:[border-top:1px_solid_#e4eaf1] max-[760px]:[&_dl>div]:[font-size:10px] max-[760px]:[&_dt]:[color:#718096] max-[760px]:[&_dd]:[margin:0] max-[760px]:[&_dd]:[font-weight:600] max-[760px]:[&_dd]:[text-align:right]",
  "users-metrics-hook":
    "[width:100%] ![grid-template-columns:repeat(3,_minmax(0,_1fr))] max-[760px]:[gap:3px] max-[760px]:[&_article]:[padding:5px_4px] max-[760px]:[&_article>strong]:[font-size:9px] max-[760px]:[&_article>strong]:[margin:3px_0_0] max-[760px]:[&_article>div:first-child]:[font-size:6px]",
  "booking-toolbar-hook":
    "[min-width:0] [display:flex] [align-items:center] [justify-content:space-between] [flex-wrap:nowrap] [&>button]:[flex:0_0_auto] max-[1000px]:[flex-wrap:wrap] max-[1000px]:[&>button]:[margin-left:auto]",
  "booking-filters-hook":
    "[min-width:0] [display:flex] [align-items:center] [gap:7px] [flex:1] [&>input]:[flex:1_1_180px] [&>input]:[width:auto] [&>input]:[max-width:260px] [&>input]:[min-width:0] max-[760px]:[width:100%] max-[1000px]:[flex-basis:100%]",
  "desktop-filter-selects-hook":
    "![display:flex] [min-width:0] [gap:7px] [&>button]:[flex:0_1_auto] [&>button]:[min-width:0] [&>button:first-child]:[flex-basis:194px] [&>button:first-child]:[min-width:170px] [&>button:first-child]:[box-sizing:border-box] [&>button:first-child]:[padding-left:12px] [&>button:first-child]:[padding-right:12px] [&>button:nth-child(2)]:[flex-basis:100px] [&>button:nth-child(3)]:[flex-basis:132px] max-[760px]:![display:none]",
  "booking-export-button":
    "[flex:0_0_auto] [border:1px_solid_#d5deeb] [border-radius:5px] max-[760px]:[display:none]",
  "detail-outline-action":
    "[display:inline-flex] [align-items:center] [justify-content:center] [gap:6px] ![border:1px_solid_#d5deeb] [background:#fff]",
  "detail-grand-total": "![color:#4f46e5] [font-size:16px]",
  "two-factor-row-hook":
    "[align-items:center] [&>span]:[display:inline-flex] [&>span]:[flex:0_0_auto] [&>span]:[align-items:center] [&>span]:[justify-content:center] [&>span]:[min-height:22px] [&>span]:[margin-left:auto] [&>span]:![padding:3px_9px] [&>span]:![border-radius:999px] [&>span]:[line-height:1]",
  "booking-link-value-hook": "![color:#4f46e5]",
  "booking-payment-status-hook":
    "[align-items:center] [&>span]:[display:inline-flex] [&>span]:[flex:0_0_auto] [&>span]:[align-items:center] [&>span]:[min-height:22px] [&>span]:[margin-left:auto] [&>span]:![padding:4px_9px] [&>span]:![border-radius:999px] [&>span]:[line-height:1]",
  "booking-note-row-hook":
    "![display:grid] [grid-template-columns:minmax(0,_1fr)] ![gap:6px] [&>b]:[width:100%] [&>b]:![max-width:none] [&>b]:![text-align:left] [&>b]:[white-space:normal] [&>b]:[line-height:1.5]",
  "detail-customer-avatar-wrap":
    "[position:relative] [display:inline-grid] [flex:0_0_30px] [width:30px] [height:30px] [place-items:center] [overflow:hidden] [border-radius:50%] [&>span]:[position:absolute] [&>span]:[inset:0] [&>img]:[position:absolute] [&>img]:[inset:0] [&>img]:[z-index:1] [&>img]:[border-radius:50%] [&>img]:[object-fit:cover]",
  "detail-profile-avatar-wrap":
    "[position:relative] [display:inline-grid] [flex:0_0_70px] [width:70px] [height:70px] [place-items:center] [overflow:hidden] [border-radius:50%] [&>span]:[position:absolute] [&>span]:[inset:0] [&>img]:[position:absolute] [&>img]:[inset:0] [&>img]:[z-index:1] [&>img]:[border-radius:50%] [&>img]:[object-fit:cover]",
  "detail-avatar-fallback":
    "[position:absolute] [inset:0] [display:grid] [place-items:center] [border:1px_solid_#d5deeb] [border-radius:50%] [background:#dde4f5] [color:#38446b] [font-size:14px] [font-weight:700]",
  "detail-profile-image": "[z-index:1]",
  "mobile-avatar-wrap":
    "[position:relative] [display:inline-grid] [flex:0_0_30px] [width:30px] [height:30px] [place-items:center] [overflow:hidden] [border-radius:50%] [&>span]:[position:absolute] [&>span]:[inset:0] [&>span]:[width:100%] [&>span]:[height:100%] [&>span]:[border-radius:50%] [&>img]:[position:absolute] [&>img]:[inset:0] [&>img]:[width:100%] [&>img]:[height:100%] [&>img]:[border-radius:50%] [&>img]:[object-fit:cover] [&>img]:[z-index:1]",
  "table-avatar-wrap":
    "[position:relative] [display:inline-grid] [flex:0_0_22px] [width:22px] [height:22px] [place-items:center] [overflow:hidden] [border-radius:50%] [&>span]:[position:absolute] [&>span]:[inset:0] [&>span]:[width:100%] [&>span]:[height:100%] [&>span]:[border-radius:50%] [&>img]:[position:absolute] [&>img]:[inset:0] [&>img]:[width:100%] [&>img]:[height:100%] [&>img]:[border-radius:50%] [&>img]:[object-fit:cover] [&>img]:[z-index:1]",
  "mobile-dashboard-tabs":
    "max-[760px]:![display:grid] max-[760px]:[grid-template-columns:repeat(3,_minmax(0,_1fr))] max-[760px]:[gap:6px] max-[760px]:![border-bottom:0] max-[760px]:[&_button]:[display:block] max-[760px]:[&_button]:[height:32px] max-[760px]:[&_button]:[padding:0_7px] max-[760px]:[&_button]:[border:1px_solid_#e4eaf1] max-[760px]:[&_button]:[border-radius:5px] max-[760px]:[&_button]:[background:#fff] max-[760px]:[&_button]:[color:#617086] max-[760px]:[&_button]:[white-space:nowrap] max-[760px]:[&_button.active-tab]:[border-color:#4f46e5] max-[760px]:[&_button.active-tab]:[background:#4f46e5] max-[760px]:[&_button.active-tab]:[color:#fff] max-[760px]:[&>button:nth-child(4)]:[display:none]",
  "table-avatar-image": "[z-index:1]",
  "mobile-dashboard-order":
    "max-[760px]:[display:flex] max-[760px]:[flex-direction:column] max-[760px]:[gap:5px] max-[760px]:[&>.dashboard-welcome-hook]:[order:0] max-[760px]:[&>.dashboard-tabs-hook]:[order:1] max-[760px]:[&>.dashboard-metrics-hook]:[order:2] max-[760px]:[&>.dashboard-chart-hook]:[order:3] max-[760px]:[&>.dashboard-transactions-hook]:[order:4] max-[760px]:[&_.dashboard-alert-hook]:[order:5] max-[760px]:[&_.dashboard-health-hook]:[order:6]",
  "mobile-dashboard-grid":
    "max-[760px]:[display:contents] max-[760px]:[&>.dashboard-side-widgets-hook]:[display:contents]",
  "dashboard-mobile-compact": "",
  "dashboard-mobile-topbar": "",
  "dashboard-mobile-nav": "",
  "detail-mobile-main-hook": "max-[760px]:[&>header]:[display:none]",
  "users-mobile-layout-hook":
    "max-[760px]:[display:flex] max-[760px]:[flex-direction:column] max-[760px]:[&:has(.users-metrics)>.users-metrics]:![order:1] max-[760px]:[&:has(.users-metrics)>.directory-card>.user-toolbar]:![order:2] max-[760px]:[&:has(.users-metrics)>.directory-card>.mobile-user-list]:![order:4] max-[760px]:[&:has(.users-metrics)>.directory-card>.pagination]:![order:5] max-[760px]:[& .mobile-user-list]:[gap:4px]",
  "dashboard-mobile-welcome":
    "max-[760px]:![margin:0_0_1px] max-[760px]:[gap:1px]",
};
