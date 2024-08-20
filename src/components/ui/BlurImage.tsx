import React, { useState } from 'react';

export const BlurImage = ({
  src,
  className,
  alt,
  ...rest
}) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <img
      className={`transition duration-300 ${isLoading ? 'blur-sm' : 'blur-0'} ${className}`}
      onLoad={() => setLoading(false)}
      src={src}
      alt={alt || 'Background of a beautiful view'}
      {...rest}
    />
  );
};
