
'use client'
import a from "next/a"
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenua } from "@/components/ui/navigation-menu"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import { useRouter } from "next/router"
export default function Home() {
  const router = useRouter
  const handleNavaClick = (event, targetId) => {
    event.preventDefault()
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" })
    }
  }
  const [Contact,setContact]=useState({name:"",email:"",message:""})
  const handleChange=(e)=>{
    setContact({...Contact,[e.target.id]:e.target.value})
    console.log(Contact)  }
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <header className="sticky top-0 z-50 w-full bg-background">
        <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/about" className="flex items-center gap-2" prefetch={false}>
            <CodeIcon className="h-6 w-6" />
            <span className="text-lg font-bold">Azib Moeen</span>
          </a>
          <nav className="hidden sm:flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenua
                    href="#intro"
                    onClick={(event) => handleNavaClick(event, "intro")}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:underline focus:underline focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:underline data-[state=open]:underline"
                  >
                    Intro
                  </NavigationMenua>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenua
                    href="#projects"
                    onClick={(event) => handleNavaClick(event, "projects")}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:underline focus:underline focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:underline data-[state=open]:underline"
                  >
                    Projects
                  </NavigationMenua>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenua
                    href="#services"
                    onClick={(event) => handleNavaClick(event, "services")}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:underline focus:underline focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:underline data-[state=open]:underline"
                  >
                    Services
                  </NavigationMenua>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenua
                    href="#contact"
                    onClick={(event) => handleNavaClick(event, "contact")}
                    className="group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:underline focus:underline focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:underline data-[state=open]:underline"
                  >
                    Contact
                  </NavigationMenua>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="sm:hidden">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="grid gap-2 py-6">
                <a
                  href="#"
                  onClick={(event) => handleNavaClick(event, "intro")}
                  className="flex w-full items-center py-2 text-lg font-semibold hover:underline focus:underline"
                  prefetch={false}
                >
                  Intro
                </a>
                <a
                  href="#"
                  onClick={(event) => handleNavaClick(event, "projects")}
                  className="flex w-full items-center py-2 text-lg font-semibold hover:underline focus:underline"
                  prefetch={false}
                >
                  Projects
                </a>
                <a
                  href="#"
                  onClick={(event) => handleNavaClick(event, "services")}
                  className="flex w-full items-center py-2 text-lg font-semibold hover:underline focus:underline"
                  prefetch={false}
                >
                  Services
                </a>
                <a
                  href="#"
                  onClick={(event) => handleNavaClick(event, "contact")}
                  className="flex w-full items-center py-2 text-lg font-semibold hover:underline focus:underline"
                  prefetch={false}
                >
                  Contact
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
      <main className="flex-1">
        <section id="intro" className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
              <div className="flex flex-col items-start justify-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Hi, I'm a MERN Stack Developer
                </h1>
                <p className="mt-4 text-muted-foreground md:text-xl">
                  I specialize in building modern, responsive web applications using the MERN (MongoDB, Express, React,
                  Node.js) stack. With years of experience, I can help you bring your ideas to life with clean,
                  efficient, and scalable code.
                </p>
                <div className="mt-6">
                  <a href="/resume.pdf" download="Azib_Moeen_Resume.pdf" className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring">
                    Download Resume
                  </a>
                </div>
              </div>
             
              
              <div className="flex justify-center">
                <img
                   src={"https://images.pexels.com/photos/939833/pexels-photo-939833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                  width="400"
                  height="400"
                  alt="Developer"
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "400/400", objectFit: "cover" }}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Projects</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">Check out some of the projects I've worked on.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <img
                    src={"https://images.pexels.com/photos/939833/pexels-photo-939833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    width="400"
                    height="225"
                    alt="Project 1"
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Project 1</h3>
                  <p className="text-muted-foreground">
                    A full-stack web application built with the MERN stack. Includes features like user authentication,
                    real-time updates, and mobile-responsive design.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="https://www.azibtube.live/"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                      target="blank"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/AzibMoeen/Youtube-Clone"
                      className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                      target="blank"
                    >
                      GitHub
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                     src={"https://images.pexels.com/photos/939833/pexels-photo-939833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    width="400"
                    height="225"
                    alt="Project 2"
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Project 2</h3>
                  <p className="text-muted-foreground">
                  A full-stack e-commerce website built with React, Node.js, and MongoDB. Features include product listings, user authentication, shopping cart, order management, and payment processing. It offers a responsive design, real-time search, and admin dashboard for managing products and orders.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      Live Demo
                    </a>
                    <a
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      GitHub
                    </a>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <img
                     src={"https://images.pexels.com/photos/939833/pexels-photo-939833.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    width="400"
                    height="225"
                    alt="Project 3"
                    className="rounded-t-lg object-cover"
                    style={{ aspectRatio: "400/225", objectFit: "cover" }}
                  />
                </CardHeader>
                <CardContent className="space-y-2">
                  <h3 className="text-xl font-bold">Project 3</h3>
                  <p className="text-muted-foreground">
                  A scalable, social media platform built with the MERN stack. Features include user authentication, posting, liking, following, commenting, messaging, and advanced search capabilities. The application offers a seamless and interactive user experience with real-time updates.
                  </p>
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                      target="blank"
                    >
                      Live Demo
                    </a>
                    <a
                      href="https://github.com/AzibMoeen/Social-Media"
                      className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                      target="blank"
                
                    >
                      GitHub
                    </a>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="services" className="bg-muted py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Services</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">Here's what I can do for you.</p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="space-y-2">
                  <CodeIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Web Development</h3>
                  <p className="text-muted-foreground">
                    I can build modern, responsive, and scalable web applications using the MERN stack.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <SmartphoneIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Mobile Development</h3>
                  <p className="text-muted-foreground">
                    I can create mobile-first web applications that provide a seamless user experience on any device.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="space-y-2">
                  <BriefcaseIcon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Consulting</h3>
                  <p className="text-muted-foreground">
                    I can provide expert advice and guidance on your web development projects, from planning to
                    deployment.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="bg-background py-12 md:py-24 lg:py-32">
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">Have a project in mind? Let's chat!</p>
            </div>
            <div className="mx-auto max-w-md">
              <form className="space-y-4">
                <div className="space-y-1">
                  <Label htmlFor="name" className="hover:underline focus:underline">
                    Name
                  </Label>
                  <Input id="name" placeholder="Your name" value={Contact.name}
                  onChange={(e)=>{handleChange(e)}} className="hover:border-accent focus:border-accent" />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="email" className="hover:underline focus:underline">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    value={Contact.email}
                    onChange={(e)=>{handleChange(e)}}
                    className="hover:border-accent focus:border-accent"
                  />
                </div>
                
                <div className="space-y-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
                <Button type="submit" className="w-full">
                  Submit
                </Button>
                              </form>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  )
}


function CodeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  )
}


function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SmartphoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
      <path d="M12 18h.01" />
    </svg>
  )
}