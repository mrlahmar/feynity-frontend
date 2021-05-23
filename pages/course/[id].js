import React from 'react'
import Head from 'next/head'
import CourseStyle from '../../styles/CourseStyle'

export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await res.json()

    const paths = data.map(ninja => {
        return {
            params: {id: ninja.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id)
    const data = await res.json()

    return {
        props: {ninja: data}
    }
}

const course = ({ninja}) => {
    return (
        <>
            <Head>
                <title>Course N° {ninja.id}</title>
            </Head>
            <CourseStyle>
                <main>
                    <span>Course</span>
                    <div className="container">
                        <div className="course">
                            <div className="course-info">
                                <h1>Python for Everyone</h1>
                                <p>on <span>Coursera</span> - by <span>University of Michigan</span></p>
                                <h4>Course Description</h4>
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur enim numquam temporibus ex, obcaecati blanditiis consectetur doloribus, odit omnis, ad voluptatum nihil magni iusto eos! Nobis optio ad nulla odio obcaecati repudiandae praesentium, tempore, distinctio deleniti animi dicta ullam id voluptatum aperiam omnis explicabo, ipsa recusandae. Modi ipsa aliquam suscipit?</p>
                            </div>
                            <div className="ctas">
                                
                            </div>
                        </div>
                        <div className="related-groups">

                        </div>
                    </div>
                </main>
            </CourseStyle>
        </>
    )
}

export default course
