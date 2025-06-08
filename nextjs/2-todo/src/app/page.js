import CreateForm from '@/components/CreateForm';
import Spinner from '@/components/Spinner';
import TaskListContainer from '@/components/TaskListContainer';
import React, { Suspense } from 'react';

const Page = () => {
  return (
    <div className="flex flex-col items-center h-screen pt-20 bg-gray-100">
      <h3 className="text-2xl font-semibold mb-6 text-gray-800">Todo App</h3>
      <CreateForm />
      <Suspense callback={<Spinner/>} fallback={<Spinner/>}>
      <TaskListContainer/>
      </Suspense>
    </div>
  );
};

export default Page;
