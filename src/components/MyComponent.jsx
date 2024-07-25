import PropTypes from 'prop-types'

export const MyComponent = ( {name, lastName} ) => {

  const student = {
    name: "Eduardo",
    lastName: "Ruiz",
    mobile: "3001234567",
    likedinProfile: "https://www.linkedin.com/johan"
  };

  console.log(student);

  return (
    <div>
      <hr />
      <h4>Este es mi primer componente</h4>
      <p>Curso de React</p>
      <p>Docente: <strong>{name} {lastName}</strong> </p>
      <ul>
        <li>Componentes</li>
        <li>Eventos</li>
        <li>Estados - Hooks</li>
        <li>Comunicación</li>
      </ul>
      <p>Estudiante: <strong>{student.name} {student.lastName}</strong></p>
      <p> </p>
      <ul>
        <li>Móvil: {student.mobile}</li>
        <li>Linkedin: {student.likedinProfile}</li>
      </ul>
      <hr />
    </div>
  )
}

MyComponent.propTypes = {
  name: PropTypes.string,
  lastName: PropTypes.string,
}
