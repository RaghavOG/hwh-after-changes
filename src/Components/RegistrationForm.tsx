'use client';

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/Components/ui/select";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Progress } from "@/Components/ui/progress";
import { Checkbox } from "@/Components/ui/checkbox";
import Link from "next/link";
import { Loader2 } from "lucide-react";

interface TeamData {
  teamName: string;
  teamLeader: string;
  numTeammates: number;
  numMales: number;
  numFemales: number;
  theme: string;
}

interface MemberData {
  name: string;
  gender: string;
  email: string;
  contact: number;
  college: string;
  stream: string;
  year: number;
}

interface Errors {
  [key: string]: string;
}

function MultiStepForm() {
  const [step, setStep] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [teamData, setTeamData] = useState<TeamData>({
    teamName: "",
    teamLeader: "",
    numTeammates: 0,
    numMales: 0,
    numFemales: 0,
    theme: "",
  });

  const [memberData, setMemberData] = useState<MemberData[]>([]);

  const [teamId, setTeamId] = useState<string>("");
  const [teamPassword, setTeamPassword] = useState<string>("");
  const [errors, setErrors] = useState<Errors>({});
  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(false);

  const validateStep1 = (): boolean => {
    const newErrors: Errors = {};
    
    // Team name validation
    if (!teamData.teamName) {
      newErrors.teamName = "Team name is required";
    } else if (teamData.teamName.length < 3) {
      newErrors.teamName = "Team name must be at least 3 characters long";
    } else if (teamData.teamName.length > 50) {
      newErrors.teamName = "Team name must be less than 50 characters";
    }

    // Team leader validation
    if (!teamData.teamLeader) {
      newErrors.teamLeader = "Team leader name is required";
    } else if (!/^[a-zA-Z\s]*$/.test(teamData.teamLeader)) {
      newErrors.teamLeader = "Team leader name should only contain letters";
    } else if (teamData.teamLeader.length < 2) {
      newErrors.teamLeader = "Team leader name must be at least 2 characters long";
    }

    // Number of teammates validation
    if (!teamData.numTeammates) {
      newErrors.numTeammates = "Number of teammates is required";
    } else if (teamData.numTeammates < 2 || teamData.numTeammates > 4) {
      newErrors.numTeammates = "Number of teammates must be between 2 and 4";
    }

    // Theme validation
    if (!teamData.theme) {
      newErrors.theme = "Theme is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = (): boolean => {
    const newErrors: Errors = {};
    const usedEmails = new Set<string>();
    const usedContacts = new Set<number>();

    memberData.forEach((member, index) => {
      // Name validation
      if (!member.name) {
        newErrors[`name${index}`] = "Name is required";
      } else if (!/^[a-zA-Z\s]*$/.test(member.name)) {
        newErrors[`name${index}`] = "Name should only contain letters";
      } else if (member.name.length < 2) {
        newErrors[`name${index}`] = "Name must be at least 2 characters long";
      }

      // Email validation
      if (!member.email) {
        newErrors[`email${index}`] = "Email is required";
      } else {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(member.email)) {
          newErrors[`email${index}`] = "Please enter a valid email address";
        } else if (usedEmails.has(member.email)) {
          newErrors[`email${index}`] = "Email address must be unique for each team member";
        } else {
          usedEmails.add(member.email);
        }
      }

      // Contact validation
      if (!member.contact) {
        newErrors[`contact${index}`] = "Contact is required";
      } else {
        const contactRegex = /^\d{10}$/;
        if (!contactRegex.test(member.contact.toString())) {
          newErrors[`contact${index}`] = "Please enter a valid 10-digit contact number";
        } else if (usedContacts.has(member.contact)) {
          newErrors[`contact${index}`] = "Contact number must be unique for each team member";
        } else {
          usedContacts.add(member.contact);
        }
      }

      // College validation
      if (!member.college) {
        newErrors[`college${index}`] = "College is required";
      } else if (member.college.length < 2) {
        newErrors[`college${index}`] = "College name must be at least 2 characters long";
      }

      // Stream validation
      if (!member.stream) {
        newErrors[`stream${index}`] = "Stream is required";
      } else if (member.stream.length < 2) {
        newErrors[`stream${index}`] = "Stream must be at least 2 characters long";
      }

      // Year validation
      if (!member.year) {
        newErrors[`year${index}`] = "Year is required";
      } else if (isNaN(member.year)) {
        newErrors[`year${index}`] = "Year must be a number";
      } else if (member.year < 1 || member.year > 4) {
        newErrors[`year${index}`] = "Year must be between 1 and 4";
      }

      // Gender validation
      if (!member.gender) {
        newErrors[`gender${index}`] = "Gender is required";
      }
    });

    // Validate at least one female member
    const femaleMembers = memberData.filter(member => member.gender === "female");
    if (femaleMembers.length === 0) {
      newErrors.gender = "Team must include at least one female member";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep3 = (): boolean => {
    const newErrors: Errors = {};
    if (!agreedToTerms) {
      newErrors.terms = "You must agree to the terms and conditions";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = (): void => {
    if (step === 1 && validateStep1()) {
      setStep(step + 1);
    } else if (step === 2 && validateStep2()) {
      setStep(step + 1);
    }
  };

  const handlePrevStep = (): void => {
    setStep(step - 1);
  };

  const handleTeamDataChange = (
    name: keyof TeamData,
    value: string | number
  ): void => {
    setTeamData({ ...teamData, [name]: value });
  };

  const handleMemberDataChange = (
    index: number,
    name: keyof MemberData,
    value: string
  ): void => {
    const updatedMembers = memberData.map((member, idx) =>
      idx === index ? { ...member, [name]: value } : member
    );
    setMemberData(updatedMembers);
  };

  const handleSubmit = async (): Promise<void> => {
    if (validateStep3()) {
      setIsLoading(true);
      try {
        // Calculate gender counts
        const numMales = memberData.filter(member => member.gender === "male").length;
        const numFemales = memberData.filter(member => member.gender === "female").length;
        
        // Update team data with gender counts
        const updatedTeamData = {
          ...teamData,
          numMales,
          numFemales
        };

        // Prepare payload
        const payload = {
          teamData: updatedTeamData,
          memberData,
        };
  
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
  
        const result = await response.json();
  
        if (response.ok) {
          console.log("Team registered successfully:", result);
          setTeamId(result.team.teamId);
          setTeamPassword(result.team.teamPassword);
          setStep(step + 1);
        } else {
          console.error("Error registering team:", result.error);
          setErrors({ submit: result.error || "Failed to register team" });
        }
      } catch (error) {
        console.error("Network or server error:", error);
        setErrors({ submit: "Network or server error occurred" });
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    setErrors({});
  }, [step]);

  useEffect(() => {
    const numTeammates = parseInt(String(teamData.numTeammates)) || 0;
    setMemberData((prevData) => {
      const newData = [...prevData];
      while (newData.length < numTeammates) {
        newData.push({
          name: "",
          gender: "",
          email: "",
          contact: 0,
          college: "",
          stream: "", 
          year: 0,
        });
      }
      return newData.slice(0, numTeammates);
    });
  }, [teamData.numTeammates]);

  return (
    <div className="w-full max-w-6xl mx-auto p-8">
      <Card className="bg-indigo-300">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center">
            Hackathon Team Registration
          </CardTitle>
          <CardDescription className="text-center">
            Complete the form to register your team
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Progress value={(step / 4) * 100} className="w-full mb-6" />

          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <h2 className="text-2xl mb-4">Step 1: Team Information</h2>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="teamName">Team Name</Label>
                  <Input
                    id="teamName"
                    value={teamData.teamName}
                    onChange={(e) =>
                      handleTeamDataChange("teamName", e.target.value)
                    }
                    className={errors.teamName ? "border-red-500" : ""}
                  />
                  {errors.teamName && (
                    <p className="text-red-500 text-sm">{errors.teamName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="teamLeader">Team Leader Name</Label>
                  <Input
                    id="teamLeader"
                    value={teamData.teamLeader}
                    onChange={(e) =>
                      handleTeamDataChange("teamLeader", e.target.value)
                    }
                    className={errors.teamLeader ? "border-red-500" : ""}
                  />
                  {errors.teamLeader && (
                    <p className="text-red-500 text-sm">{errors.teamLeader}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="numTeammates">Number of Teammates</Label>
                  <Input
                    id="numTeammates"
                    type="number"
                    value={teamData.numTeammates}
                    onChange={(e) =>
                      handleTeamDataChange(
                        "numTeammates",
                        parseInt(e.target.value)
                      )
                    }
                    className={errors.numTeammates ? "border-red-500" : ""}
                  />
                  {errors.numTeammates && (
                    <p className="text-red-500 text-sm">
                      {errors.numTeammates}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select
                    onValueChange={(value) =>
                      handleTeamDataChange("theme", value)
                    }
                  >
                    <SelectTrigger
                      className={errors.theme ? "border-red-500" : ""}
                    >
                      <SelectValue placeholder="Select Theme" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Theme 1">Theme 1</SelectItem>
                      <SelectItem value="Theme 2">Theme 2</SelectItem>
                      <SelectItem value="Theme 3">Theme 3</SelectItem>
                      <SelectItem value="Theme 4">Theme 4</SelectItem>
                      <SelectItem value="Theme 5">Theme 5</SelectItem>
                      <SelectItem value="Theme 6">Theme 6</SelectItem>
                    </SelectContent>
                  </Select>
                  {errors.theme && (
                    <p className="text-red-500 text-sm">{errors.theme}</p>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <h2 className="text-2xl mb-4">Step 2: Team Members</h2>
              {errors.gender && (
                <p className="text-red-500 text-sm mb-4">{errors.gender}</p>
              )}
              <div className="space-y-6">
                {memberData.map((member, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle>Member {index + 1}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor={`name${index}`}>Name</Label>
                          <Input
                            id={`name${index}`}
                            value={member.name}
                            onChange={(e) =>
                              handleMemberDataChange(
                                index,
                                "name",
                                e.target.value
                              )
                            }
                            className={
                              errors[`name${index}`] ? "border-red-500" : ""
                            }
                          />
                          {errors[`name${index}`] && (
                            <p className="text-red-500 text-sm">
                              {errors[`name${index}`]}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`email${index}`}>Email</Label>
                          <Input
                            id={`email${index}`}
                            type="email"
                            value={member.email}
                            onChange={(e) =>
                              handleMemberDataChange(
                                index,
                                "email",
                                e.target.value
                              )
                            }
                            className={
                              errors[`email${index}`] ? "border-red-500" : ""
                            }
                          />
                          {errors[`email${index}`] && (
                            <p className="text-red-500 text-sm">
                              {errors[`email${index}`]}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`contact${index}`}>Contact</Label>
                          <Input
                            id={`contact${index}`}
                            value={member.contact}
                            onChange={(e) =>
                              handleMemberDataChange(
                                index,
                                "contact",
                                e.target.value
                              )
                            }
                            className={
                              errors[`contact${index}`] ? "border-red-500" : ""
                            }
                          />
                          {errors[`contact${index}`] && (
                            <p className="text-red-500 text-sm">
                              {errors[`contact${index}`]}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`gender${index}`}>Gender</Label>
                          <Select
                            onValueChange={(value) =>
                              handleMemberDataChange(index, "gender", value)
                            }
                          >
                            <SelectTrigger 
                              id={`gender${index}`}
                              className={errors[`gender${index}`] ? "border-red-500" : ""}
                            >
                              <SelectValue placeholder="Select Gender" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="male">Male</SelectItem>
                              <SelectItem value="female">Female</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                          {errors[`gender${index}`] && (
                            <p className="text-red-500 text-sm">
                              {errors[`gender${index}`]}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`college${index}`}>College</Label>
                          <Input
                            id={`college${index}`}
                            value={member.college}
                            onChange={(e) =>
                              handleMemberDataChange(
                                index,
                                "college",
                                e.target.value
                              )
                            }
                            className={
                              errors[`college${index}`] ? "border-red-500" : ""
                            }
                          />
                          {errors[`college${index}`] && (
                            <p className="text-red-500 text-sm">
                              {errors[`college${index}`]}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`stream${index}`}>Stream</Label>
                          <Input
                            id={`stream${index}`}
                            value={member.stream}
                            onChange={(e) =>
                              handleMemberDataChange(
                                index,
                                "stream",
                                e.target.value
                              )
                            }
                            className={
                              errors[`stream${index}`] ? "border-red-500" : ""
                            }
                          />
                          {errors[`stream${index}`] && (
                            <p className="text-red-500 text-sm">
                              {errors[`stream${index}`]}
                            </p>
                          )}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor={`year${index}`}>Year</Label>
                          <Input
                            id={`year${index}`}
                            type="number"
                            min="1"
                            max="4"
                            value={member.year}
                            onChange={(e) =>
                              handleMemberDataChange(
                                index,
                                "year",
                                e.target.value
                              )
                            }
                            className={
                              errors[`year${index}`] ? "border-red-500" : ""
                            }
                          />
                          {errors[`year${index}`] && (
                            <p className="text-red-500 text-sm">
                              {errors[`year${index}`]}
                            </p>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
            >
              <h2 className="text-2xl mb-4">Step 3: Confirm Submission</h2>
              <p className="mb-4">
                Please confirm your details and submit the form.
              </p>
              <Card>
                <CardContent className="pt-6">
                  <div className="space-y-2">
                    <p>
                      <strong>Team Name:</strong> {teamData.teamName}
                    </p>
                    <p>
                      <strong>Team Leader:</strong> {teamData.teamLeader}
                    </p>
                    <p>
                      <strong>Theme:</strong> {teamData.theme}
                    </p>
                    <p>
                      <strong>Members:</strong>
                    </p>
                    <ul className="list-disc list-inside pl-4">
                      {memberData.map((member, index) => (
                        <li key={index}>
                          {member.name} ({member.gender}) - {member.email} - {member.contact} - {member.college},{" "}
                          {member.stream}, Year {member.year}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              <div className="flex items-center space-x-2 mt-4">
                <Checkbox
                  id="terms"
                  checked={agreedToTerms}
                  onCheckedChange={(checked: boolean) =>
                    setAgreedToTerms(checked)
                  }
                />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  I agree to the terms and conditions
                </label>
              </div>
              
              {errors.terms && (
                <p className="text-red-500 text-sm mt-2">{errors.terms}</p>
              )}
              {errors.submit && (
                <p className="text-red-500 text-sm mt-2">{errors.submit}</p>
              )}
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Team Registered Successfully</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <p className="text-lg">
                      Your unique team ID is:{" "}
                      <strong className="text-primary">{teamId}</strong>
                    </p>
                    <p className="text-lg">
                      Your team password is:{" "}
                      <strong className="text-primary">{teamPassword}</strong>
                    </p>
                    <div className="bg-yellow-100 p-4 rounded-md mt-4">
                      <p className="text-yellow-800">
                        Please save these credentials! You&apos;ll need them to submit your abstract.
                      </p>
                    </div>
                  </div>
                  <Button className="mt-6 bg-blue-700">
                    <Link href="/">Go to Home</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </CardContent>
        <CardFooter className="flex justify-between">
          {step > 1 && step < 4 && (
            <Button variant="outline" onClick={handlePrevStep}>
              Previous Step
            </Button>
          )}
          {step < 3 && (
            <Button onClick={handleNextStep} className="ml-auto">
              Next Step
            </Button>
          )}
          {step === 3 && (
            <Button 
              onClick={handleSubmit} 
              className="ml-auto"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Submit"
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}

export default MultiStepForm;