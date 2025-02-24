export const Card = ({ className, ...props }) => (
  <div
    className={`bg-gray-800 border border-blue-600 rounded-lg ${className}`}
    {...props}
  />
);

export const CardHeader = ({ className, ...props }) => (
  <div className={`p-6 ${className}`} {...props} />
);

export const CardTitle = ({ className, ...props }) => (
  <h3 className={`text-lg font-semibold text-white ${className}`} {...props} />
);

export const CardContent = ({ className, ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props} />
);
