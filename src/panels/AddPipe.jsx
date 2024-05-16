import React from 'react'

function AddPipe() {
  return (
    <div className='h-[400px] w-[500px] bg-white rounded-2xl flex flex-col gap-5 absolute top-[20%] shadow-black shadow-md p-10'>
        <h1 className="w-[300px] flex items-center gap-5 text-slate-900 font-semibold">
          Length:{" "}
          <span>
            <input
              type="text"
              className="p-2 border-[1px] border-slate-500 rounded-xl bg-slate-200"
              placeholder="Length (m)"
            />
          </span>
        </h1>
    </div>
  )
}

export default AddPipe