import { Component, OnInit, AfterViewInit } from "@angular/core";
declare var $: any;

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit {
  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    $(document).ready(function () {
      console.log('jquery ready');
      $("#sidebar").mCustomScrollbar({
        theme: "minimal"
      });

      // if (!$('#sidebar').hasClass('active')) {
      //   $('.navbar-expand-lg .navbar-nav').css('margin-right', '250px');
      // } else {
      //   $('.navbar-expand-lg .navbar-nav').css('margin-right', '0px');
      // }
      // $("#logout-btn").css("margin-top", ($(window).height()-$("#logout-btn").height())+"px");

      $('#sidebarCollapse').on('click', function () {
        console.log('Click button');
        $('#sidebar, #content, #nav-content').toggleClass('active');
        // $('#nav-content').toggleClass('active');
        // if (!$('#sidebar').hasClass('active')) {
        //   $('.navbar-expand-lg .navbar-nav').css('margin-right', '250px');
        // } else {
        //   $('.navbar-expand-lg .navbar-nav').css('margin-right', '0px');
        // }
        $('.collapse.in').toggleClass('in');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      });
    })
  }
}
