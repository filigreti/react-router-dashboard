import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { PencilIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  yourName: z
    .string()
    .min(2, { message: "Name must be at least 2 characters" }),
  userName: z
    .string()
    .min(2, { message: "Username must be at least 2 characters" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string(),
  dateOfBirth: z.string(),
  presentAddress: z.string(),
  permanentAddress: z.string(),
  city: z.string(),
  postalCode: z.string(),
  country: z.string(),
});

type FormValues = z.infer<typeof formSchema>;

export default function ProfileSettingsForm() {
  const defaultValues: FormValues = {
    yourName: "Charlene Reed",
    userName: "Charlene Reed",
    email: "charlenereed@gmail.com",
    password: "********",
    dateOfBirth: "25 January 1990",
    presentAddress: "San Jose, California, USA",
    permanentAddress: "San Jose, California, USA",
    city: "San Jose",
    postalCode: "45962",
    country: "USA",
  };

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  function onSubmit(data: FormValues) {
    console.log(data);
    // Handle form submission logic here
  }

  return (
    <div className="w-full xl:p-9 p-5 dashboard:bg-background  ">
      <div className="bg-background dashboard:xl:bg-white dashboard:bg-background rounded-lg xl:p-6">
        <Tabs
          defaultValue="edit-profile"
          className="w-full xl:pt-0 pt-2 px-4   xl:p-0 dashboard:bg-white rounded-xl xl:rounded-none"
        >
          <TabsList className="flex xl:justify-start justify-between  border-b xl:gap-x-10 rounded-none">
            <TabsTrigger
              value="edit-profile"
              className="rounded-none   relative data-[state=active]:before:absolute data-[state=active]:before:w-full data-[state=active]:before:h-[2px] data-[state=active]:before:bg-primary data-[state=active]:before:bottom-[-4px] data-[state=active]:before:rounded-s-md data-[state=active]:before:left-0"
            >
              Edit Profile
            </TabsTrigger>
            <TabsTrigger
              value="preferences"
              className="rounded-none   relative data-[state=active]:before:absolute data-[state=active]:before:w-full data-[state=active]:before:h-[2px] data-[state=active]:before:bg-primary data-[state=active]:before:bottom-[-4px] data-[state=active]:before:rounded-s-md data-[state=active]:before:left-0"
            >
              Preferences
            </TabsTrigger>
            <TabsTrigger
              value="security"
              className="rounded-none   relative data-[state=active]:before:absolute data-[state=active]:before:w-full data-[state=active]:before:h-[2px] data-[state=active]:before:bg-primary data-[state=active]:before:bottom-[-4px] data-[state=active]:before:rounded-s-md data-[state=active]:before:left-0"
            >
              Security
            </TabsTrigger>
          </TabsList>

          <TabsContent value="edit-profile" className="xl:p-6 p-2">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <div className="flex xl:flex-row flex-col xl:gap-10">
                  <div className="xl:p-0 py-4 flex xl:block justify-center">
                    <div className="relative">
                      <Avatar className="w-[7rem] h-[7rem]">
                        <AvatarImage
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=cro"
                          alt="Profile"
                          className="object-cover"
                        />
                        <AvatarFallback>CR</AvatarFallback>
                      </Avatar>
                      <Button
                        size="icon"
                        className="absolute bottom-0 right-0 rounded-full w-8 h-8"
                      >
                        <PencilIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="w-full grid xl:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="yourName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" font-normal">
                            Your Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-transparent dashboard:text-secondary"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="userName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" font-normal">
                            User Name
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-transparent dashboard:text-secondary"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" font-normal">Email</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-transparent dashboard:text-secondary"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="password"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" font-normal">
                            Password
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-transparent dashboard:text-secondary"
                              {...field}
                              type="password"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="dateOfBirth"
                      render={({ field }) => (
                        <FormItem className="relative">
                          <FormLabel className=" font-normal">
                            Date of Birth
                          </FormLabel>
                          <FormControl>
                            <div className="relative">
                              <Input
                                className="h-12 bg-transparent dashboard:text-secondary [appearance:textfield] [&::-webkit-calendar-picker-indicator]:hidden"
                                {...field}
                                type="date"
                                value={
                                  field.value
                                    ? new Date(field.value)
                                        .toISOString()
                                        .split("T")[0]
                                    : ""
                                }
                              />
                              <div
                                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                                onClick={() => {
                                  const input = document.querySelector(
                                    'input[type="date"]'
                                  ) as HTMLInputElement;
                                  input?.showPicker();
                                }}
                              >
                                <svg
                                  width="16"
                                  height="16"
                                  viewBox="0 0 16 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="text-gray-400"
                                >
                                  <path
                                    d="M4 6L8 10L12 6"
                                    stroke="currentColor"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              </div>
                            </div>
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="presentAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" font-normal">
                            Present Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-transparent dashboard:text-secondary"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="permanentAddress"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" font-normal">
                            Permanent Address
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-transparent dashboard:text-secondary"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="city"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" font-normal">City</FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-transparent dashboard:text-secondary"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="postalCode"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" font-normal">
                            Postal Code
                          </FormLabel>
                          <FormControl>
                            <Input
                              className="h-12 bg-transparent dashboard:text-secondary"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="country"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className=" font-normal">
                            Country
                          </FormLabel>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                            >
                              <SelectTrigger className="h-12 bg-transparent dashboard:text-secondary">
                                <SelectValue placeholder="Select a country" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="USA">
                                  United States
                                </SelectItem>
                                <SelectItem value="UK">
                                  United Kingdom
                                </SelectItem>
                                <SelectItem value="Canada">Canada</SelectItem>
                                <SelectItem value="Australia">
                                  Australia
                                </SelectItem>
                                <SelectItem value="Germany">Germany</SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>

                <div className="flex justify-end xl:justify-end w-full pb-5">
                  <Button type="submit" className="xl:px-8 w-full xl:w-auto">
                    Save
                  </Button>
                </div>
              </form>
            </Form>
          </TabsContent>

          <TabsContent value="preferences">
            <div className="p-6">
              <p className="text-center text-gray-500">Preferences</p>
            </div>
          </TabsContent>

          <TabsContent value="security">
            <div className="p-6">
              <p className="text-center text-gray-500">Security</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
