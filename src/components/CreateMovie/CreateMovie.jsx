import React from "react";
import { useDispatch } from "react-redux";
import * as actions from "../../redux/actions";
// Importar las actions como Object Modules, sino los test no funcionarán!

// Fijense en los test que SI O SI tiene que ser un functional component, de otra forma NO VAN A PASAR LOS TEST
// Deben usar Hooks para que los test pasen.
// No realicen un destructuring de ellos, sino que utilicenlos de la siguiente forma 'React.useState' y 'React.useEffect' ,
// Si no lo hacen asi los test no van a correr.

const CreateMovie = () => {
  const [values, setValues] = React.useState({
    name: "",
    releaseYear: 0,
    description: "",
    director: "",
  });

  const dispatch = useDispatch();

  const handleInputChange = function (e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submit = function (e) {
    e.preventDefault();
    dispatch(actions.createMovie(values));
  };

  return (
    <form onSubmit={submit}>
    </form>
  );
};

export default CreateMovie;
