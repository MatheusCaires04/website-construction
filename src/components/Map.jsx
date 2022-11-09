import React from "react";
import GoogleMapReact from "google-map-react";

const Map = () => {
  return (
    <div className="w-full h-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d12629.489286839977!2d-49.09245072597715!3d-22.32303741531114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d-22.327775799999998!2d-49.088609299999995!4m5!1s0x94bf67b52c17d4a7%3A0x45f6122b49679965!2sVila%20S%C3%A3o%20Jo%C3%A3o%20da%20Boa%20Vista%2C%20Bauru%20-%20SP%2C%2017060-330!3m2!1d-22.3174383!2d-49.0814756!5e1!3m2!1spt-BR!2sbr!4v1667997597426!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
