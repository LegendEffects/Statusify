import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai"
import Icon, { IconProps } from "@chakra-ui/icon"

interface ComponentGroupHeaderToggleIndicatorProps extends IconProps {
  collapsed: boolean;
}

export default function ComponentGroupHeaderToggleIndicator({ collapsed, ...props }: ComponentGroupHeaderToggleIndicatorProps) {
  if(collapsed) {
    return <Icon as={AiOutlinePlus} {...props} />
  }
  
  return <Icon as={AiOutlineClose} {...props} />
}