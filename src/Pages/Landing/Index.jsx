import React from "react";
import { Hero } from "../../Components/Layout/Hero/Hero";
import { About } from "../../Components/Layout/About/About";
import { Vision } from "../../Components/Layout/Vision/Vision";
import { ConstructionAndProjectManagment } from "../../Components/Layout/ConstructionAndProjectManagment/ConstructionAndProjectManagment";
import { Divider } from "@chakra-ui/react";
import { ProjectSupportServices } from "../../Components/Layout/ProjectSupportServices/ProjectSupportServices";
import { OpertationsAndMaintainceServices } from "../../Components/Layout/OperationsMaintenanceServices/OperationsMaintenanceServices";
import { FireProtectionServices } from "../../Components/Layout/FileProtectionServices/FileProtectionServices";
import { Services } from "../../Components/Layout/Services/Services";
import { Contact } from "../../Components/Layout/Contact/Contact";
export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Vision />
      <ConstructionAndProjectManagment />
      <Divider />
      <ProjectSupportServices />
      <OpertationsAndMaintainceServices />
      <FireProtectionServices />
      <Services />
      <Contact />
    </>
  );
}
