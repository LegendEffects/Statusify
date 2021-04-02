import Icon, { IconProps } from "@chakra-ui/icon"
import { AiOutlineClose, AiOutlinePlus } from "react-icons/ai"

interface ComponentGroupHeaderToggleIndicatorProps extends IconProps {
  collapsed: boolean;
}

export default function ComponentGroupHeaderToggleIndicator({ collapsed, ...props }: ComponentGroupHeaderToggleIndicatorProps) {
  if(collapsed) {
    return <Icon as={AiOutlinePlus} {...props} />
  }
  
  return <Icon as={AiOutlineClose} {...props} />
}