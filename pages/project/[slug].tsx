import React from 'react'
import type { NextPage } from 'next';

type ProjectProps = {
  
}

const ProjectPage: NextPage<ProjectProps> = () => {
  return (
    <div>
      <h1>Project</h1>
    </div>
  )
}

export async function getStaticPaths() {

}

export async function getStaticProps({params}:any) {
  
}

export default ProjectPage;