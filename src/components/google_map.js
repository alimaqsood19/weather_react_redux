import React, { Component } from 'react';

class GoogleMap extends Component {
    componentDidMount() { //once the component has been rendered to the screen componentDidMount will execute
        new google.maps.Map(this.refs.map, { //takes a reference to the html elememt and renders the map to it
            zoom: 12,  //zoom of the map
            center: { //Where to center the map with the lat and lng 
                lat: this.props.lat,
                lng: this.props.lon 
            }
        });
    }
    render() {
        return <div ref="map" />
        //this.refs.map will give a direct reference to this html element
        // ref allows us to reference an html element that has been rendered to the page
    }

}

export default GoogleMap;