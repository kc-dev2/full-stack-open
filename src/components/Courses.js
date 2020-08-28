import React from 'react'
import Course from './Course.js'

const Courses = ({courses}) => {
    return (
        courses.map(course => 
            <Course key={course.id} course={course} />
        )
    )
}

export default Courses;