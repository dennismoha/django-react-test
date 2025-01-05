import { useState, useEffect } from "react";
import PatientsRecord from "../../components/card-section/";
import { useGetPatientRecordsQuery, useDeletePatientRecordMutation, useCreatePatientRecordMutation, PatientRecord } from "../../store/api";
import "../../assets/styles/detail.css";

function Details() {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");

  const { data: patientRecords, error, isLoading } = useGetPatientRecordsQuery();
  const [deletePatientRecord] = useDeletePatientRecordMutation();
  const [createPatientRecord] = useCreatePatientRecordMutation();

  if (isLoading) {
    return <p>Loading ....</p>;
  }

  return (
    <div>
      <div>
        <h2>Patient Records</h2>
        {patientRecords?.length === 0 || patientRecords === undefined ? (
          <p>No patients found...</p>
        ) : (
          <PatientsRecord patientRecords={patientRecords} />
        )}
      </div>
    </div>
  );
}

export default Details;
