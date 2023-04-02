import Title from "./shared/title"
import CertificationList from '../data/certifications'

type Certification = {
  organization: string,
  certification: string,
  grade: string
}

const certificationFormatter = (cert: Certification) => {
  return (
    <div className="my-1">
      <h3>
        <span className="font-bold text-md">{cert.certification}</span>
        <span className="text-xs italic font-boldtext-gray-500">&nbsp;{cert.grade}</span>

      </h3>
      <h3 className="text-xs font-bold text-rose-400 mx-1">{cert.organization}</h3>
    </div>
  )
}

const Certifications = () => {
  return (
    <div className="w-full">
      <Title title="Certifications & Licenses" icon_class="fa-solid fa-certificate" />
      <div className="px-6">
        { CertificationList.map(certificationFormatter) }
      </div>
    </div>
  )
}

export default Certifications
