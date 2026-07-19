function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="text-5xl animate-bounce">🍌</div>
      <p className="text-banana-light mt-4 text-sm">
        Sending monkeys to fetch the data...
      </p>
    </div>
  )
}

export default LoadingSpinner