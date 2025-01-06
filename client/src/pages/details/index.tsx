import PatientsRecord from "../../components/card-section/";
import { useGetPatientRecordsQuery } from "../../store/api";
import "../../assets/styles/detail.css";

function Details() {
  const {
    data: patientRecords,
    error,
    isLoading,
  } = useGetPatientRecordsQuery();

  if (isLoading) {
    return <p>Loading ....</p>;
  }

  if (error) return <div> error fetching patients records</div>;

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
