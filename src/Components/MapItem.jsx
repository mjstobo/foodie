import React, { Component } from "react";

class MapItem extends Component {
  render() {
    return (
      <section className="map-item"
          style={{
            color: "white",
            background: "grey",
            padding: "5px 7.5px",
            display: "inline-flex",
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "100%",
            transform: "translate(-50%, -50%)"
          }}
        >

      </section>
    );
  }
}

export default MapItem;
