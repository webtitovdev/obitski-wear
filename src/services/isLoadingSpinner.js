import Spinner from "../components/spinner/Spinner";
export const isLoadingSpinner = (status) => {
  if (status) {
    return <Spinner />;
  }
};
