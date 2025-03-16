export default function ErrorMessage({ error }) {
  if (!error) {
    return null;
  }
  return (
    <>
      <p>Something wrong, Please try again.</p>
    </>
  );
}
