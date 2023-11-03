import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={365}
    viewBox="0 0 280 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="84" y="15" rx="0" ry="0" width="46" height="0" /> 
    <rect x="6" y="37" rx="0" ry="0" width="111" height="186" /> 
    <rect x="138" y="47" rx="0" ry="0" width="42" height="27" /> 
    <rect x="245" y="50" rx="0" ry="0" width="39" height="25" /> 
    <rect x="132" y="97" rx="0" ry="0" width="164" height="69" /> 
    <rect x="135" y="191" rx="0" ry="0" width="75" height="35" /> 
    <rect x="244" y="193" rx="0" ry="0" width="34" height="32" />
  </ContentLoader>
)

export default Skeleton

// Skeleton