import React from "react";
import "./style.scss";

const PokemonCard = (props) => {
  console.log("props", props.props);

  const {
    props: {
      name = "",
      abilities = [],
      weight = "",
      height = "",
      types = [],
      stats = [],
    } = {},
  } = props || {};

  return (
    <>
      <div>
        <figure className="card card--normal">
          <div className="card__image-container"></div>

          <figcaption className="card__caption">
            <h1 className="card__name">{name}</h1>

            {types.map((type, index) => {
              const { type: { name = "" } = {} } = type || {};
              return (
                <h3 className="card__type" id={index} key={index}>
                  {name}
                </h3>
              );
            })}

            <table className="card__stats">
              <tbody>
                <tr>
                  <th>Weight</th>
                  <td>{weight}</td>
                </tr>
                <tr>
                  <th>Height</th>
                  <td>{height}</td>
                </tr>
                {/* -----stats--- */}
                {stats.map((status, index) => {
                  const { base_stat = "", stat: { name = "" } = {} } =
                    status || {};
                  return (
                    <tr key={index}>
                      <th>{name}</th>
                      <td>{base_stat}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            {abilities.map((avl, index) => {
              const { ability: { name = "" } = {} } = avl || {};
              //   console.log("name", name);
              return (
                <div className="card__abilities">
                  {/* <h4 className="card__ability">
                    <span className="card__label">Ability</span>
                    <h3 className="card__type" key={index}>
                      name
                    </h3>
                  </h4> */}
                  <h4 className="card__ability">
                    <span className="card__label">Ability</span>
                    {name}
                  </h4>
                </div>
              );
            })}
          </figcaption>
        </figure>
      </div>
    </>
  );
};

export default PokemonCard;