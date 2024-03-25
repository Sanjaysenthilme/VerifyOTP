import React from 'react';
import NavBar from './NavBar';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';



const Dashboard = () => {
  return (
    <div className="w-full overflow-hidden">
      <NavBar />

      <div>
        <div className="w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-900">
              Please Mark Your Interests!
            </h2>
            <h3 className="mt-8 text-2xl">we will keep you notified</h3>
            <p className="mt-3 text-md font-light">My saved interests</p>
          </div>

          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow-xl sm:rounded-xl sm:px-10">
              <form className="space-y-6">
                <p className='flex justify-start font-extrabold text-2xl'>My saved interest!</p>
                <div className="flex items-center">
                  <input type="checkbox" id="interestCheckbox" className="h-6 w-6 mr-2 bg-slate-500" defaultChecked/>
                  <label htmlFor="interestCheckbox" className="text-xl">
                    Shoes
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="interestCheckbox" className="h-6 w-6 mr-2 bg-slate-500" />
                  <label htmlFor="interestCheckbox" className="text-xl">
                    Shoes
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="interestCheckbox" className="h-6 w-6 mr-2 bg-slate-500" defaultChecked/>
                  <label htmlFor="interestCheckbox" className="text-xl">
                    Menu T-shirt
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="interestCheckbox" className="h-6 w-6 mr-2 bg-slate-500" />
                  <label htmlFor="interestCheckbox" className="text-xl">
                    Makeup
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="interestCheckbox" className="h-6 w-6 mr-2 bg-slate-500" defaultChecked/>
                  <label htmlFor="interestCheckbox" className="text-xl">
                    Jewellry
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="interestCheckbox" className="h-6 w-6 mr-2 bg-slate-500" />
                  <label htmlFor="interestCheckbox" className="text-xl">
                    Woment - Tshirt
                  </label>
                </div>
                <div className="flex items-center">
                  <input type="checkbox" id="interestCheckbox" className="h-6 w-6 mr-2 bg-slate-500  border-gray-300 focus:ring-indigo-50" defaultChecked/>
                  <label htmlFor="interestCheckbox" className="text-xl">
                    furniture
                  </label>
                  
                </div>
              </form>
            <div className="bg-inherit mt-11">
            <Stack spacing={2}>
                <Pagination count={10} variant="outlined" />
            </Stack>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
