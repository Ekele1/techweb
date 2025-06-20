"use client"

import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { FaCheckCircle } from "react-icons/fa";
import RecentWorks from '../../components/recent';
import { useParams } from 'next/navigation';
import {Project} from '@/app/components/types/data';

const Page = () => {
    const [project, setProject] = useState<Project | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const params = useParams<{ id: string }>();

    useEffect(() => {
    const fetchProject = () => {
        try {
            const storedProject = sessionStorage.getItem('currentProject');
            
            if (storedProject) {
                const parsedProject: Project = JSON.parse(storedProject);
                if (parsedProject.id === Number(params.id)) {
                    setProject(parsedProject);
                    setLoading(false);
                    return;
                }
            }

            // Fallback: Could fetch from API here
            throw new Error('Project not found in session storage');
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to load project');
            setLoading(false);
        }
    };

        fetchProject();
    }, [params.id]);

    if (loading) return <div className="text-center py-20">Loading...</div>;
    if (error) return <div className="text-center py-20 text-red-500">Error: {error}</div>;
    if (!project) return <div className="text-center py-20">Project not found</div>;


  return (
    <div className='w-full'>
        <div className='w-full h-[300px] relative'>
            <Image 
                className="object-cover"
                src="/service.jpg" 
                alt="pics"
                fill
                priority
                sizes='fill'
            />
            <div className='absolute inset-0'>
                <div className='w-full h-full bg-black opacity-60 flex items-center pl-4'>
                    <div>
                        <p className='text-[50px] font-bold text-white'>Project Details</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full min-h-screen flex flex-col items-center justify-center gap-5 lg:pt-30 pt-[30px] pb-[30px] lg:pb-30'>
            <div className='lg:w-[80%] w-full lg:h-[500px] h-[200px] relative'>
                <Image 
                    className="object-cover lg:rounded-3xl"
                    src="/robot1.jpg" 
                    alt="pics"
                    fill
                    priority
                    sizes='fill'
                />
            </div>
            <div className='lg:w-[80%] w-full h-[140px] bg-[#f5f5f5] rounded-2xl flex items-center justify-around'>
                <div>
                    <p className='text-gray-600'>Date</p>
                    <p className='text-black'>{project.date}</p>
                </div>
                <div>
                    <p className='text-gray-600'>Client</p>
                    <p className='text-black'>{project.client}</p>
                </div>
                {/* <div>
                    <p className='text-gray-600'>website</p>
                    <p className='text-black'>www.funiro.com</p>
                </div> */}
                <div>
                    <p className='text-gray-600'>Location</p>
                    <p className='text-black'>{project.location}</p>
                </div>
            </div>
            <div className='lg:w-[80%] w-full pl-2 lg:pl-0'>
                <p className='text-black font-bold text-[20px]'>Here is what to know about this project</p>
            </div>
            <div className='lg:w-[80%] w-[95%] flex flex-col gap-4'>
                <p className='text-gray-500'>
                    {project.description}
                </p>
            </div>
            <div className='lg:w-[80%] w-full pl-2 lg:pl-0'>
                <div className='flex flex-col gap-3'>
                    {
                        project.keyObjectives.map((e,i)=>(
                            <div key={i} className='flex items-center gap-3'>
                        <FaCheckCircle className='text-[#336ae9]'/>
                        <p>{e}</p>
                    </div>
                        ))
                    }
                </div>
            </div>
            <div className='lg:w-[80%] w-full pl-2 lg:pl-0'>
                <p className='text-black font-bold text-[20px]'>Scope of work</p>
            </div>
            <div className='lg:w-[80%] w-[95%] flex flex-col gap-4'>
                <p className='text-gray-500'>
                    {project.outcome}
                </p>
            </div>
            <div className='lg:w-[80%] w-full pl-2 lg:pl-0'>
                <div className='flex flex-col gap-3'>
                    {
                        project.scopeOfWork.map((e,i)=>(
                            <div key={i} className='flex items-center gap-3'>
                        <FaCheckCircle className=''/>
                        <p>{e}</p>
                    </div>
                        ))
                    }
                </div>
            </div>
            <div className='lg:w-[80%] w-full pl-2 lg:pl-0'>
                <p className='text-black font-bold text-[20px]'>Tools</p>
            </div>
            <div className='lg:w-[80%] w-[95%] flex flex-col gap-4'>
                <p className='text-gray-500'>
                    {/* {project.outcome} */}
                </p>
            </div>
            <div className='lg:w-[80%] w-full pl-2 lg:pl-0'>
                <div className='flex flex-col gap-3'>
                    {
                        project.tools?.map((e,i)=>(
                            <div key={i} className='flex items-center gap-3'>
                        <FaCheckCircle className=''/>
                        <p>{e}</p>
                    </div>
                        ))
                    }
                </div>
            </div>
        </div>
        <RecentWorks />
    </div>
  )
}

export default Page