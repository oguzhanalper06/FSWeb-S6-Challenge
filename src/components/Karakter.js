// Karakter bileşeniniz buraya gelecek

import React from "react";
import styled from "styled-components";

function Karakter(props) {
  const { data, tiklama, karakter } = props;

  const ScDefine = styled.div`
    ${(props) =>
      props.karakter !== props.dataIsim ? `display:none` : `display:block`};
  `;

  const ScKarakter = styled.div`
    width: 40%;
    border-radius: 20px;
    margin: 17px auto;
    background-color: white;
    color: grey;
    padding: 1px 5px;
    display: block;
  `;

  return (
    <div>
      <ScKarakter>
        <h3 key={data.name}>{data.name}</h3>
        <button onClick={() => tiklama(data.isim)}>
          {karakter !== data.isim ? "Properties" : "Hidden"}
        </button>

        <ScDefine karakter={karakter} dataIsim={data.isim}>
          <p>Gender : {data.gender}</p>
          <p>Birth Year : {data.birth_year}</p>
          <p>Height : {data.height}</p>
          <p>Mass : {data.mass}</p>
          <p>Skin Color : {data.skin_color}</p>
          <p>Hair Color : {data.hair_color}</p>
          <p>Eye Color : {data.eye_color}</p>
        </ScDefine>
      </ScKarakter>
    </div>
  );
}
export default Karakter;
