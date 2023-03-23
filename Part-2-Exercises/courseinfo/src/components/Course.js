const Course = ({courses}) => {
    return (
        <>
            {courses.map(course => 
                <div key={course.id}>
                    <Header name={course.name} />
                    <Content parts={course.parts} />
                    <Total parts={course.parts} />
                </div>
            )}
        </>
    )
}

const Header = ({name}) => {
    return (
        <h1>
          {name}
        </h1>
    )
  }
  
const Content = ({parts}) => {
    return (
        <>
            {parts.map(part =>
                <Part key={part.id} part={part} />
            )}
        </>
    )
}
  
const Part = ({part}) => {
    return (
        <p>
            {part.name} {part.exercises}
        </p>
    )
}
  
const Total = ({parts}) => {
    return (
        <p>
            Total of {parts.reduce((accumulator, currentValue) => 
                accumulator + currentValue.exercises, 0,
            )} exercises
        </p>
    )
}

export default Course;