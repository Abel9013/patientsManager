import { usePatientStore } from "../store"
import PatientDetaill from "./PatientDetaills";

export default function PatientsList() {
  
  const patients = usePatientStore(state=>state.patients)
  console.log(patients);
  
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length ? (
        <>
          <h2 className="font-black text-3xl text-center">List of patients</h2>
          <p className="text-xl mt-5 mb-10 text-center">Manage your {" "} <span className="text-indigo-600 font-bold">patients and appointments
            </span>
          </p>
          {patients.map(patient =>(
            <PatientDetaill key={patient.id} patient={patient} />
          ))}
        </>
        ) : (
          <> <h2 className="font-black text-3xl text-center">There aren't patients</h2>
              <p className="text-xl mt-5 mb-10 text-center">Start adding patients{" "} 
                <span className="text-indigo-600 font-bold">and they will show here</span>
              </p>
          </>)}
      
    </div>
  )
}
