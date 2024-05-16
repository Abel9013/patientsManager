import { Patient } from "../types"
import PatientDetaillsItem from "./PatientDetaillsItem"
import { usePatientStore } from "../store"


type PatientDetaillsProps = {
  patient: Patient
}
export default function PatientDetaills({patient} : PatientDetaillsProps) {
  const deletePatient = usePatientStore((state)=>state.deletePatient)
  const getPatientById = usePatientStore((state)=>state.getPatientById)
 
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      <PatientDetaillsItem label="ID" data={patient.id} />
      <PatientDetaillsItem label="Name" data={patient.name} /> 
      <PatientDetaillsItem label="Care taker" data={patient.caretaker} /> 
      <PatientDetaillsItem label="Email" data={patient.email} /> 
      <PatientDetaillsItem label="Date of discharge" data={patient.date.toString()} /> 
      <PatientDetaillsItem label="Symptoms" data={patient.symptoms} /> 
      <div className="flex flex-col gap-4 lg:flex-row justify-between mt-10">
        <button type="button" 
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                onClick={()=>getPatientById(patient.id)}        
        >
          Edit
        </button>
        <button type="button" 
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                onClick={()=>deletePatient(patient.id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}
