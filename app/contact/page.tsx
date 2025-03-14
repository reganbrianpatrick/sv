"use client"

import { useEffect, useRef } from "react"
import { Mail, MapPin, Phone } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

// Add HubSpot types
declare global {
  interface Window {
    hbspt?: {
      forms: {
        create: (config: {
          region: string
          portalId: string
          formId: string
          target: string
        }) => void
      }
    }
  }
}

export default function ContactPage() {
  const hubspotFormRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Load HubSpot script
    const script = document.createElement("script")
    script.src = "https://js.hsforms.net/forms/embed/v2.js"
    script.charset = "utf-8"
    script.type = "text/javascript"
    script.defer = true
    document.body.appendChild(script)

    script.onload = () => {
      if (window.hbspt && hubspotFormRef.current) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "YOUR_HUBSPOT_PORTAL_ID", // Replace with your HubSpot portal ID
          formId: "YOUR_HUBSPOT_FORM_ID", // Replace with your HubSpot form ID
          target: "#hubspot-form-container",
        })
      }
    }

    return () => {
      // Clean up script when component unmounts
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get in touch with our team to discuss investment opportunities or learn more about Service Ventures.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl gap-8 py-12 lg:grid-cols-2">
              <div>
                <div className="grid gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Our Offices</CardTitle>
                      <CardDescription>Visit us at one of our locations</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-6">
                      <div className="flex items-start gap-4">
                        <MapPin className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-medium">San Francisco</h3>
                          <p className="text-sm text-muted-foreground">
                            123 Market Street, Suite 400
                            <br />
                            San Francisco, CA 94105
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <MapPin className="mt-1 h-5 w-5 text-primary" />
                        <div>
                          <h3 className="font-medium">New York</h3>
                          <p className="text-sm text-muted-foreground">
                            456 Madison Avenue, 8th Floor
                            <br />
                            New York, NY 10022
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                      <CardDescription>Reach out directly</CardDescription>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                      <div className="flex items-center gap-4">
                        <Mail className="h-5 w-5 text-primary" />
                        <div>
                          <a href="mailto:info@serviceventures.com" className="font-medium hover:underline">
                            info@serviceventures.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Phone className="h-5 w-5 text-primary" />
                        <div>
                          <a href="tel:+14155551234" className="font-medium hover:underline">
                            (415) 555-1234
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>Fill out the form below and our team will get back to you shortly.</CardDescription>
                </CardHeader>
                <CardContent>
                  {/* HubSpot Form Container */}
                  <div id="hubspot-form-container" ref={hubspotFormRef} className="min-h-[400px]">
                    <p className="text-muted-foreground text-center py-8">Loading contact form...</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

