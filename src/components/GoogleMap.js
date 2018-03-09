import React, { Component } from "react";

export default class GoogleMap extends Component {
  componentDidMount() {
    var center = {lat: 49.273 ,lng: -123.1206178 }
    var home = {lat: 49.233, lng: -123.112 };
    var map =  new window.google.maps.Map(this.refs.map, {
      zoom: 13,
      center: home
    });
    var marker = new window.google.maps.Marker({
      position: home ,
      map: map
    });
  }

  render() {
    return <div ref="map" />;
  }
}
