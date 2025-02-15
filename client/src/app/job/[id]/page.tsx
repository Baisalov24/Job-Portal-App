export default function JobDetailsPage({ params }: { params: { id: string } }) {
    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold">Job Details</h1>
        <p>Displaying details for job ID: {params.id}</p>
      </div>
    );
  }
  