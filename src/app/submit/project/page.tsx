/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/Components/ui/card'
import { Input } from '@/Components/ui/input'
import { Button } from '@/Components/ui/button'
import { AlertCircle, FileText, Loader2 } from 'lucide-react'
import { Label } from '@/Components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '@/Components/ui/alert'

export default function ProjectSubmissionPage() {
  const router = useRouter();
  const [teamId, setTeamId] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      if (!file || !teamId || !password) {
        throw new Error('Please fill in all fields');
      }

      if (!file.name.endsWith('.zip')) {
        throw new Error('Please upload a ZIP file');
      }

      const formData = new FormData();
      formData.append('file', file);
      formData.append('team_id', teamId);
      formData.append('teamPassword', password);

      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/submit/project`, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setSuccess(true);
      setTeamId('');
      setPassword('');
      setFile(null);
      // setTimeout(() => {
      //   router.push('/dashboard');
      // }, 2000);

    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <Card className="bg-gray-800 border-gray-700 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-gray-100">
              Submit Project
            </CardTitle>
            <CardDescription className="text-center text-gray-400">
              Upload your team&apos;s project ZIP file
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="teamId" className="text-sm font-medium text-gray-200">
                  Team ID
                </Label>
                <Input
                  id="teamId"
                  type="text"
                  value={teamId}
                  onChange={(e) => setTeamId(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-gray-100"
                  placeholder="Enter your team ID"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-200">
                  Team Password
                </Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="bg-gray-700 border-gray-600 text-gray-100"
                  placeholder="Enter your team password"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="file" className="text-sm font-medium text-gray-200">
                  Project ZIP
                </Label>
                <Input
                  id="file"
                  type="file"
                  accept=".zip"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                  required
                  className="bg-gray-700 border-gray-600 text-gray-100"
                />
              </div>
              {error && (
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>Error</AlertTitle>
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}
              {success && (
                <Alert className="bg-green-900 border-green-800">
                  <FileText className="h-4 w-4 text-green-400" />
                  <AlertTitle className="text-green-400">Success</AlertTitle>
                  <AlertDescription className="text-green-300">
                    Your project has been submitted successfully. 
                  </AlertDescription>
                </Alert>
              )}
            </form>
          </CardContent>
          <CardFooter>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Project'
              )}
            </Button>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  )
}
