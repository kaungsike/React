"use client"

import createTask from '@/actions/createTask';
import React, { useActionState } from 'react';

const CreateForm =  () => {

    const [state,formAction,isPending] = useActionState(createTask)

  return (
    <form action={formAction} className="max-w-md mx-auto mt-6">
      <div className="flex items-center gap-2">
        <input
          type="text"
          required
          name='title'
          placeholder="Enter task title..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Add
        </button>
      </div>
    </form>
  );
};

export default CreateForm;
