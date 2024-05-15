import React, { useState } from 'react'
import { FaList } from 'react-icons/fa'
import { MdGridView } from 'react-icons/md'
import { useParams } from 'react-router-dom'
import LoadingComponent from '../LoadingComponent/LoadingComponent'
import { IoMdAdd } from "react-icons/io";
import TabsComponent from '../TabsComponent/TabsComponent'
import TitleComponent from '../TitleComponent/TitleComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'
import TasksTitleComponent from '../TasksTitleComponent/TasksTitleComponent'
import BoardViewComponent from '../BoardViewComponent/BoardViewComponent'
import { tasks } from "../../../assets/skillData/skillData";
import AddTask from '../Task/AddTask'
import Table from '../Task/Table'

const TaskComponent = () => {
   const TABS=[
    {title:'xem bảng',icon:<MdGridView/>},
    {title:'xem danh sách',icon:<FaList/>},
   ]

   const TASK_TYPE = {
    todo: "bg-blue-600",
    "in progress": "bg-yellow-600",
    completed: "bg-green-600",
  };

  const params = useParams();

  const [selected, setSelected] = useState(0);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const status = params?.status || "";
  return loading ? (
    <div className='py-10'>
      <LoadingComponent />
    </div>
  ) : (
    <div className='w-full'>
      <div className='flex items-center justify-between mb-4'>
        <TitleComponent title={status ? `${status} Tasks` : "Tasks"} />

        {!status && (
          <ButtonComponent
            onClick={() => setOpen(true)}
            label='Them Task'
            icon={<IoMdAdd className='text-lg' />}
            className='flex flex-row-reverse gap-1 items-center bg-blue-600 text-white rounded-md py-2 2xl:py-2.5'
          />
        )}
      </div>

      <TabsComponent tabs={TABS} setSelected={setSelected}>
        {!status && (
          <div className='w-full flex justify-between gap-4 md:gap-x-12 py-4'>
            <TasksTitleComponent label='To Do' className={TASK_TYPE.todo} />
            <TasksTitleComponent
              label='In Progress'
              className={TASK_TYPE["in progress"]}
            />
            <TasksTitleComponent label='completed' className={TASK_TYPE.completed} />
          </div>
        )}

        {selected !== 1 ? (
          <BoardViewComponent tasks={tasks} />
        ) : (
          <div >
            <Table tasks={tasks} />
          </div>
        )}
      </TabsComponent>

      <AddTask open={open} setOpen={setOpen} />
    </div>
  );
};

export default TaskComponent