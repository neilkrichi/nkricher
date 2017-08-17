import React, { Component } from "react";

export default class GoogleMap extends Component {
  componentDidMount() {
    var center = {lat: 49.273 ,lng: -123.1206178 }
    var sgenius = {lat: 49.2638865, lng: -123.1101035 };
    var map =  new window.google.maps.Map(this.refs.map, {
      zoom: 13,
      center: center
    });
    var marker = new window.google.maps.Marker({
      position: sgenius ,
      map: map
    });
  }

  render() {
    return <div ref="map" />;
  }
}
