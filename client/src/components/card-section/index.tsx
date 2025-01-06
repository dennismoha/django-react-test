import React from "react";
import "../../assets/styles/single-detail.css";
import { useDeletePatientRecordMutation } from "../../store/api";

// Define the PatientRecord type (if it's not imported from another file)
export interface PatientRecord {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

// Now expecting an array of PatientRecord objects
const PatientRecords: React.FC<{ patientRecords: PatientRecord[] }> = ({
  patientRecords,
}) => {
  const [deletePatientRecord] = useDeletePatientRecordMutation();

  const deletePatientRecordHandler = (id: number) => {
    deletePatientRecord(id);
  };

  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-1 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16   pt-1 sm:mt-1 sm:pt-1 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {patientRecords.map((patient) => (
            <article
              key={patient.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="group relative">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                  <a href={patient.title}>
                    <span className="absolute inset-0" />
                    {patient.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                  {patient.content}
                </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                {/* <img alt="" src={patient.author.imageUrl} className="size-10 rounded-full bg-gray-50" /> */}
                <div className="text-sm/6">
                  <button
                    onClick={() => deletePatientRecordHandler(patient.id)}
                    className="font-semibold text-gray-900"
                  >
                    delete
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PatientRecords;
