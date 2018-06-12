/* --- Colors --- */

$brand-primary: #484C55 !default;
$brand-success: #5cb85c !default;
$brand-info: #5bc0de !default;
$brand-warning: #f0ad4e !default;
$brand-danger: #A81732 !default;

$brand-light: #eee !default;
$brand-dark: $brand-primary !default;
$brand-white: #fff !default;
$brand-black: #000 !default;
$brand-muted: #979797 !default;

/* -- Fonts & Details -- */

$headings-font-family: 'Montserrat', sans-serif;
$headings-font-weight:    700 !default;
$headings-color:    $brand-primary !default;
$font-size-h4: 15px !default;
$font-family-base: 'Montserrat', Arial, "Helvetica Neue", Helvetica, sans-serif;
$font-size-base: 14px !default;
$grid-float-breakpoint: $screen-md-min !default;


/* --- Navbar Variables --- */

$sp-logo-max-height: 80px !default;
$sp-logo-max-width: 80px !default;
$sp-logo-margin-x: 15px !default;
$sp-logo-margin-y: 3px !default;
$navbar-height: 90px !default;
$navbar-inverse-bg: $brand-white !default;
$navbar-inverse-link-color: $brand-dark !default;
$navbar-inverse-link-hover-color: $brand-danger !default;

$navbar-inverse-toggle-hover-bg: $brand-danger !default;
$navbar-inverse-toggle-icon-bar-bg: $brand-white !default;
$navbar-inverse-toggle-border-color: $brand-danger !default;

$navbar-live-chat-color: $brand-white !important;
$navbar-live-chat-bg: $brand-danger !important;

/* Button Link */
$nr-buttonlink-title-size: $font-size-h4 !default;
$nr-buttonlink-title-color: $brand-primary !default;
$nr-buttonlink-text-color: $text-color !default;
$nr-buttonlink-count-color: $brand-danger !default;
$nr-buttonlink-image-size: 50px !default;

/* My Items */
$nr-myitems-tab-border-color: $brand-danger;
$nr-myitems-tab-color: $brand-danger;
$nr-myitems-th-color: $brand-danger;
.req-number {
	color: $brand-primary;
}
.my-items .nr-myitems th.th-title {
	color: $brand-danger !important;
}

/* -- Live Chat -- */
$iframe-live-chat-color: $brand-white !important;
$iframe-live-chat-bg: $brand-danger !important;

/* --- Category Button Variables --- */
$nr-category-button-image-size: 50px !default;
.category-button .category-button-text {
  color: $brand-muted !important;
}

/* -- KB Home -- */
.kb-home .text-default {
	color: $brand-muted !important;
}

/* -- Home Button Link Section -- */
.home-buttonlink .buttonlink-text {
	color: $brand-muted !important;
}

/* -- SC Cat Item Widget -- */
.sc-cat-item .sc-cat-item-text {
  color: $brand-muted !important;
}


/* -- Ticket -- */
.ticket-sidebar .break-word label,
.ticket-sidebar em,
.ticket-sidebar .panel.b .panel-heading .panel-title,
.ticket-sidebar ul .clear div span,
.ticket-sidebar .panel-body .row .m-b > label {
	 color: $brand-muted !important;
}
.ticket-sidebar .break-word div,
.ticket-sidebar .panel.b .geo-address .text-muted,
.ticket-sidebar .panel-body h4,
.ticket-sidebar ul .clear small.text-muted,
.ticket-sidebar .panel-body .row .m-b > span > div{
	 color: $brand-primary !important;
}
.ticket-sidebar .panel.b .panel-heading .panel-title.pull-left,
.ticket-sidebar .panel.b .panel-heading .panel-title {
	 color: $brand-white !important;
}

/* --- Home Main Jumbotron --- */
$home-banner-height: 360px !default;

.home-bg {
  background-color: $brand-danger;
  color: $brand-white !important;
}
@media only screen and (min-width : 768px) {
  .home-image {
    background-image: url('/home-image.jpg');
    height: $home-banner-height;
    background-size: cover;
    background-position: center;
  }
  .home-image-2 {
  	background-image: url('/home-image-2.jpg');
    height: $home-banner-height;
    background-size: cover;
    background-position: center;
  }
  .home-image-3 {
  	background-image: url('/home-image-3.jpg');
    height: $home-banner-height;
    background-size: cover;
    background-position: center;
  }
  .home-content {
    padding-top: 40px;
    color: $brand-white;
    height: $home-banner-height;
    margin-top: -$home-banner-height;
  }
  .home-gradient {
  	background-color: linear-gradient(to right, rgba(154,37,59,0.9) 0%,rgba(182,46,39,0.9) 100%);
  }
  /*.home-search {
    padding-right: 50px !important;
  }*/
}
@media only screen and (min-width : 992px) {
  .home-content {
    padding-top: 80px;
  }
}

.breadcrumbs-container {
  padding-top: 10px !important;
  padding-bottom: 8px !important;
  margin-bottom: 30px !important;
  border-bottom: 1px solid #dee5e7 !important;
  background-color: $brand-light !important;
  .nav > li > a {
    color: $brand-dark;
  }
  .fa-chevron-right {
    color: #999;
  }
}

header .navbar-toggle {
  background-color: $brand-danger;
  border-color: $brand-danger;;
}

header .navbar-nav > li > a {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 13px;
}

/* -- Page Heading -- */

.page-heading {
  background-color: $brand-danger !important;
  padding: 30px !important;
  color: $brand-white !important;
  .page-heading h1, .title-text {
    color: $brand-white !important;
  }
}

/* --- Backgrounds --- */

.bg-primary {
  background-color: $brand-primary !important;
}
.bg-light {
  background-color: $brand-light !important;
}
.bg-dark {
  background-color: $brand-dark !important;
}
.bg-danger {
  background-color: $brand-danger !important;
}

/* Footer */
footer {
  background-color: $brand-primary;
}

/* Panels */
.panel-primary .panel-heading {
  background-color: $brand-dark;
  color: $brand-white !important;
}

/* Text Colors */
.text-white, .text-white h1, .text-white h3 {
  color: $brand-white !important;
}
.help h2, .help h2 span {
  color: $brand-white !important;
}

/* Image Properties */
.img-height {
  height:300px;
}

/* Category Widgets */
.sc-categories > .sc-categories-list > a.open,
.kb-categories > .list-group > div > a.list-group-item.open {
  border-left: 4px solid $brand-danger !important;
}
