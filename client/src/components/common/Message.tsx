import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

interface MessageProps {
  message: string;
  fontSize?: number | string;
  color?: string;
  height?: number | string;
}

const Message: FC<MessageProps> = ({
  message,
  fontSize = 24,
  color = 'error.main',
  height = 200,
}) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={height}
    >
      <Typography fontSize={fontSize} color={color}>
        {message}
      </Typography>
    </Box>
  );
};

export default Message;
