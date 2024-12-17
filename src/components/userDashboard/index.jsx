import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { userApi } from '../../Apis/index.jsx';
import Loader from '../../components/loader.jsx';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Input } from '@/components/ui/input';
import { Progress } from '@/components/ui/progress';
import {
  Bell,
  ClipboardCopy,
  Facebook,
  Instagram,
  Mail,
  Share2,
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

// Dummy notifications
const notifications = [
  'Your itinerary has been updated!',
  'New destinations added to your preferences.',
  'You have 2 new referrals.',
];

export default function UserDashboard() {
  const [itineraryData, setGetitinerary] = useState([]);
  const [isGeneratingSuggestions, setIsGeneratingSuggestions] = useState(false);
  const [generatedSuggestions, setGeneratedSuggestions] = useState(false); // Track if suggestions have been generated
  const [itineraryLoadingState, setItineraryLoadingState] = useState({});

  const [profileData, setProfileData] = useState(null);
  const [activeTab, setActiveTab] = useState('profile');
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const [showNotifications, setShowNotifications] = useState(false); // State to toggle notifications
  const [isEditModalOpen, setIsEditModalOpen] = useState(false); // State for edit profile modal
  const [budget, setBudget] = useState(0); // State for edit profile modal
  const [isLoading, setIsLoading] = useState(true);
  const [editData, setEditData] = useState({ fullName: '', email: '' });
  // Form state for inputs
  const [interest, setSelectedInterests] = useState([]);
  const [activityPreferences, setActivityPreferences] = useState([]);
  const [diningPreferences, setDiningPreferences] = useState([]);
  const [referalcode, setreferalcode] = useState('');
  const [referalcodestatus, setreferalcodestatus] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [successmessage, setsucessmessage] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [formData, setFormData] = useState({
    destination: '',
    title: '',
    startDate: '',
    endDate: '',
    purpose: '',
    duration: '',
    cuisineType: '',
    transportation: '',
    budget: 0,
  });
  const navigate = useNavigate(); // Hook to navigate programmatically
  useEffect(() => {
    fetchProfile();
  }, []);

  const fetchProfile = async () => {
    setIsLoading(true);
    try {
      const response = await userApi.GetProfile();
      setProfileData(response);
      setEditData({ fullName: response.fullName, email: response.email });
    } catch (error) {
      console.error('Error fetching profile:', error);
    }
    setIsLoading(false);
  };

  const handleUpdateProfile = async () => {
    try {
      await userApi.UpdateProfile({
        fullName: editData?.fullName,
        email: editData?.email,
      });
      setIsEditModalOpen(false);
      fetchProfile(); // Re-fetch profile data to get updated details
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  //Add New Itinerary code with check box logic
  const handleCheckboxChange = (category, value) => {
    if (category === 'interest') {
      setSelectedInterests(prevState => {
        if (prevState.includes(value)) {
          return prevState.filter(item => item !== value);
        } else {
          return [...prevState, value];
        }
      });
    } else if (category === 'activityPreferences') {
      setActivityPreferences(prevState => {
        if (prevState.includes(value)) {
          return prevState.filter(item => item !== value);
        } else {
          return [...prevState, value];
        }
      });
    } else if (category === 'diningPreferences') {
      setDiningPreferences(prevState => {
        if (prevState.includes(value)) {
          return prevState.filter(item => item !== value);
        } else {
          return [...prevState, value];
        }
      });
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const payload = {
      ...formData,
      interest, // Ensure this is an array
      activityPreferences, // Ensure this is an array
      diningPreferences, // Ensure this is an array
    };
    try {
      console.log('apidata', payload);

      const response = await userApi.Createitineraries(payload);

      console.log('api response', response);
      setsucessmessage(response.message);
      toast.success(response.message);
      setSelectedItinerary(null); // Reset selected itinerary
    } catch (error) {
      toast.error('Failed to create itinerary. Please try again.');
      console.error('Error creating itinerary:', error);
    }
  };

  // itinerary logic end

  // Get All itinerary

  useEffect(() => {
    fetchItinerary();
  }, []);
  // Function to fetch itinerary data
  const fetchItinerary = async () => {
    setIsLoading(true);
    try {
      const response = await userApi.Getitineraries();
      console.log(response);

      // Ensure response is an array before setting the state
      if (Array.isArray(response)) {
        setGetitinerary(response);
      } else {
        console.error('Fetched data is not an array:', response);
      }
    } catch (error) {
      console.error('Error fetching itineraries:', error);
    }
    setIsLoading(false);
  };

  // Handle generating suggestions for a specific itinerary
  const handleGenerateSuggestions = async itinerary => {
    // Set the specific itinerary as loading
    console.log('comming', itinerary);

    setItineraryLoadingState(prevState => ({
      ...prevState,
      [itinerary._id]: true,
    }));

    try {
      const id = itinerary._id;
      console.log('itineraryid', id);

      // Call API to generate suggestions
      const response = await userApi.FetchItinerarySuggestions(id);
      console.log('Suggestions generated:', response);

      // Once suggestions are generated, fetch the updated itinerary with suggestions
      fetchItinerary();

      // Mark the suggestions as generated for that itinerary
      setGeneratedSuggestions(false);
    } catch (error) {
      console.error('Error generating suggestions:', error);
    } finally {
      // Reset the loading state for this specific itinerary after the request completes
      setItineraryLoadingState(prevState => ({
        ...prevState,
        [itinerary._id]: false,
      }));
    }
  };

  // Handle navigating to AI page with suggestions data
  const handleSeeSuggestions = async itinerary => {
    console.log('comming', itinerary);
    try {
      // Fetch suggestions
      const id = itinerary._id;
      console.log('current itineraries id', id);

      const response = await userApi.getSuggestions(id);
      console.log('Fetched suggestions:', response);

      // Navigate to AI page with suggestions
      navigate('/ai', { state: { suggestions: response } });
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  // Create Referals
  const handleCreatereferralsSubmit = async () => {
    try {
      const response = await userApi.Createreferrals();
      const responsereferralsstatus = await userApi.Createreferralsstatus();
      const responseGetreferralscredits = await userApi.Getreferralscredits();
      setreferalcode(response.referralCode);
      console.log(
        'response',
        response,
        responsereferralsstatus,
        responseGetreferralscredits
      );

      console.log(
        'second api response',
        responseGetreferralscredits.creditsEarned
      );
      const credtiearns = responseGetreferralscredits.creditsEarned;
      setreferalcodestatus(credtiearns);

      toast.success(response.message);
    } catch (error) {
      toast.error('Failed to create itinerary. Please try again.');
      console.error('Error creating itinerary:', error);
    }
  };
  const friendsReferred = referalcodestatus / 10; // Calculate number of friends

  const referralProgress = {
    creditsEarned: referalcodestatus,
    creditsNeeded: 100,
    friendsReferred: friendsReferred,
  };
  if (isLoading) {
    return <Loader />;
  }

  // stripe api

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-6'>User Dashboard</h1>

      <>
        {/* Hamburger Icon */}
        <div className='absolute left-5 top-20'>
          <button
            // onMouseEnter={() => setIsDropdownOpen(true)}
            // onMouseLeave={() => setIsDropdownOpen(false)}
            onClick={() => setIsDropdownOpen(prev => !prev)}
            className='text-gray-800 focus:outline-none'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>

        {/* Dropdown Menu */}
        {isDropdownOpen && (
          <div className='absolute top-32 left-0 w-full bg-white shadow-md rounded-lg mt-2 md:w-auto'>
            <ul className='flex flex-col'>
              <li>
                <Link
                  to='/user-profile'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  User Profile{' '}
                </Link>
              </li>
              <li>
                <Link to='/about' className='block px-4 py-2 hover:bg-gray-100'>
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='/privacy-policy'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Privacy
                </Link>
              </li>{' '}
              <li>
                <Link
                  to='/terms-and-conditions'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Terms
                </Link>
              </li>{' '}
              <li>
                <Link to='/guide' className='block px-4 py-2 hover:bg-gray-100'>
                  Guide
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='block px-4 py-2 hover:bg-gray-100'
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to='/work' className='block px-4 py-2 hover:bg-gray-100'>
                  How it Works
                </Link>
              </li>
            </ul>
          </div>
        )}
      </>

      <Tabs value={activeTab} onValueChange={setActiveTab} className='w-full'>
        {/* <TabsList className='grid w-full grid-cols-1 gap-2 md:grid-cols-4 md:gap-4'>
          <TabsTrigger value='profile'>Profile</TabsTrigger>
          <TabsTrigger value='itineraries'>Itineraries</TabsTrigger>
          <TabsTrigger value='referrals' onClick={handleCreatereferralsSubmit}>
            Referrals
          </TabsTrigger>
          <TabsTrigger value='add-itinerary'>Add Itinerary</TabsTrigger>
        </TabsList> */}
        <div className='relative bg-white w-full'>
          {/* Hamburger Icon for Mobile */}
          <button
            className='block md:hidden p-2 bg-gray-200 rounded focus:outline-none'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='2'
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.75 7.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5'
              />
            </svg>
          </button>

          {/* Tabs List */}
          <div
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } absolute left-0 top-full z-10 w-full bg-white shadow-lg md:static md:z-auto md:block md:shadow-none`}
          >
            <TabsList className='grid grid-cols-1 bg-white h-full gap-2 md:grid-cols-4 md:gap-4 p-4 md:p-0'>
              <TabsTrigger value='profile'>Profile</TabsTrigger>
              <TabsTrigger value='itineraries'>Itineraries</TabsTrigger>
              <TabsTrigger
                value='referrals'
                onClick={handleCreatereferralsSubmit}
              >
                Referrals
              </TabsTrigger>
              <TabsTrigger value='add-itinerary'>Add Itinerary</TabsTrigger>
            </TabsList>
          </div>
        </div>
        {/* Profile Tab */}
        <TabsContent value='profile'>
          <Card>
            <CardHeader>
              <CardTitle>Profile Settings</CardTitle>
              <CardDescription>Manage your account details</CardDescription>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='flex items-center space-x-4'>
                <Avatar className='h-20 w-20'>
                  <Avatar className='h-20 w-20'>
                    <AvatarImage
                      src='/placeholder.svg'
                      alt={profileData?.fullName}
                    />
                    <AvatarFallback>
                      {profileData?.fullName ? profileData?.fullName[0] : 'U'}
                    </AvatarFallback>
                  </Avatar>
                </Avatar>
                <div>
                  <h2 className='text-2xl font-semibold'>
                    Welcome, {profileData?.fullName || 'User'}!
                  </h2>
                  <p className='text-sm text-gray-500'>
                    {profileData
                      ? `Email: ${profileData.email || 'N/A'}`
                      : 'Loading your profile...'}
                  </p>
                </div>
                {/* Notification Icon */}
                <div className='relative'>
                  <Bell
                    className='cursor-pointer'
                    onClick={() => setShowNotifications(!showNotifications)}
                  />
                  {showNotifications && (
                    <div className='absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg p-4'>
                      <ul>
                        {notifications.map((notification, index) => (
                          <li key={index} className='py-2'>
                            {notification}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className='space-y-2'>
                <p>
                  <strong>Date of Birth:</strong>{' '}
                  {profileData?.dob
                    ? new Date(profileData.dob).toLocaleDateString()
                    : 'Not provided'}
                </p>

                <p>
                  <strong>Credits Earned:</strong> {profileData?.creditsEarned}
                </p>
              </div>

              <Button onClick={() => setIsEditModalOpen(true)}>
                Edit Profile
              </Button>

              {/* Edit Profile Modal */}
              <Dialog open={isEditModalOpen} onOpenChange={setIsEditModalOpen}>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                  </DialogHeader>
                  <div className='space-y-4'>
                    <Input
                      placeholder='Full Name'
                      value={editData.fullName}
                      onChange={e =>
                        setEditData({ ...editData, fullName: e.target.value })
                      }
                    />
                    <Input
                      placeholder='Email'
                      value={editData.email}
                      onChange={e =>
                        setEditData({ ...editData, email: e.target.value })
                      }
                    />
                    <Button onClick={handleUpdateProfile}>Save Changes</Button>
                  </div>
                </DialogContent>
              </Dialog>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='itineraries'>
          <Card>
            <CardHeader>
              <CardTitle>Saved Itineraries</CardTitle>
              <CardDescription>
                View and manage your saved trips
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div>
                {isLoading ? (
                  <div className='skeleton-loader'>
                    <div role='status' className='max-w-sm animate-pulse'>
                      <div className='h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4'></div>
                      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5'></div>
                      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5'></div>
                      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5'></div>
                      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5'></div>
                      <div className='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]'></div>
                      <span className='sr-only'>Loading...</span>
                    </div>
                  </div>
                ) : (
                  <>
                    {itineraryData && itineraryData.length > 0 ? (
                      <ul className='space-y-4'>
                        {itineraryData.map(itinerary => (
                          <li
                            key={itinerary.id}
                            className='flex justify-between items-center'
                          >
                            <h3 className='font-semibold flex flex-col justify-start items-start'>
                              {itinerary.title}
                              <p className='text-sm flex text-gray-500'>
                                {itinerary.startDate &&
                                !isNaN(new Date(itinerary.startDate).getTime())
                                  ? new Date(
                                      itinerary.startDate
                                    ).toLocaleDateString('en-US', {
                                      year: 'numeric',
                                      month: 'short',
                                      day: 'numeric',
                                    })
                                  : 'Invalid Date'}

                                <p className='ms-4'>
                                  Destination {' '}
                                  <span className='text-gray-400'>
                                    {' '}
                                    {itinerary.destination}
                                  </span>{' '}
                                </p>
                              </p>
                            </h3>

                            <div className='flex'>
                              <div className='me-4'>
                                <Dialog>
                                  <DialogTrigger asChild>
                                    <div className='flex'>
                                      <Button
                                        variant='outline'
                                        onClick={() =>
                                          setSelectedItinerary(itinerary)
                                        }
                                      >
                                        View
                                      </Button>
                                    </div>
                                  </DialogTrigger>

                                  <DialogContent className='sm:max-w-[425px]'>
                                    <DialogHeader>
                                      <DialogTitle>
                                        Share Your Itinerary
                                      </DialogTitle>
                                      <DialogDescription>
                                        {itinerary.destination ||
                                          'No destination specified'}
                                      </DialogDescription>
                                    </DialogHeader>
                                    <div className='grid gap-4 py-4'>
                                      <div className='grid grid-cols-4 items-center gap-4'>
                                        <img
                                          src='/placeholder.svg'
                                          alt={
                                            itinerary.name || 'Itinerary Image'
                                          }
                                          className='col-span-4 h-40 w-full object-cover rounded-md'
                                        />
                                      </div>

                                      {/* Social Media Links */}
                                      <div className='flex space-x-2'>
                                        {itinerary.shareLinks?.facebook && (
                                          <a
                                            href={itinerary.shareLinks.facebook}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-blue-600'
                                          >
                                            <Button
                                              variant='outline'
                                              size='icon'
                                            >
                                              <Facebook className='h-4 w-4' />
                                            </Button>
                                          </a>
                                        )}
                                        {itinerary.shareLinks?.instagram && (
                                          <a
                                            href={
                                              itinerary.shareLinks.instagram
                                            }
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-pink-500'
                                          >
                                            <Button
                                              variant='outline'
                                              size='icon'
                                            >
                                              <Instagram className='h-4 w-4' />
                                            </Button>
                                          </a>
                                        )}
                                        {itinerary.shareLinks?.tiktok && (
                                          <a
                                            href={itinerary.shareLinks.tiktok}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='text-black'
                                          >
                                            <Button
                                              variant='outline'
                                              size='icon'
                                            >
                                              <Share2 className='h-4 w-4' />
                                            </Button>
                                          </a>
                                        )}
                                      </div>

                                      {/* Copy Itinerary Link */}
                                      <div className='flex items-center space-x-2'>
                                        <Input
                                          id='itinerary-link'
                                          value={`https://visit-detroit.com/itinerary/${itinerary._id}`}
                                          readOnly
                                        />
                                        <Button
                                          size='sm'
                                          className='shrink-0'
                                          onClick={() =>
                                            navigator.clipboard.writeText(
                                              `https://visit-detroit.com/itinerary/${itinerary._id}`
                                            )
                                          }
                                        >
                                          Copy
                                        </Button>
                                      </div>
                                    </div>
                                  </DialogContent>
                                </Dialog>
                              </div>

                              {/* Buttons outside the DialogTrigger */}
                              <div className='flex space-x-2'>
                                {/* Conditionally render button based on activities */}
                                {itinerary.activitiesByDay &&
                                itinerary.activitiesByDay.length > 0 ? (
                                  <Button
                                    variant='outline'
                                    onClick={() =>
                                      handleSeeSuggestions(itinerary)
                                    }
                                  >
                                    See Suggestions
                                  </Button>
                                ) : (
                                  <Button
                                    variant='outline'
                                    onClick={() =>
                                      handleGenerateSuggestions(itinerary)
                                    }
                                    disabled={
                                      itineraryLoadingState[itinerary.id] ||
                                      isGeneratingSuggestions
                                    }
                                  >
                                    {itineraryLoadingState[itinerary.id]
                                      ? 'Generating Suggestions...'
                                      : 'Generate Suggestions'}
                                  </Button>
                                )}
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className='text-gray-500 text-center'>
                        No itineraries found.
                      </p>
                    )}
                  </>
                )}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='referrals'>
          <Card>
            <CardHeader>
              <CardTitle>Your Referral Program</CardTitle>
            </CardHeader>
            <CardContent className='space-y-4'>
              <div className='grid gap-4 md:grid-cols-2'>
                <Card>
                  <CardHeader>
                    <CardTitle className='text-lg'>
                      Your Referral Code
                    </CardTitle>
                    <CardDescription>
                      Share this code with your friends
                    </CardDescription>
                  </CardHeader>
                  <CardContent className='flex justify-between items-center'>
                    <code className='relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold'>
                      {referalcode}
                    </code>
                    <Button size='icon' variant='ghost'>
                      <ClipboardCopy
                        className='h-4 w-4'
                        onClick={() => {
                          navigator.clipboard.writeText(referalcode).then(
                            () => {
                              console.log(
                                'Referral code copied to clipboard:',
                                referalcode
                              );
                            },
                            err => {
                              console.error(
                                'Failed to copy referral code: ',
                                err
                              );
                            }
                          );
                        }}
                      />
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader>
                    <CardTitle className='text-lg'>Referral Stats</CardTitle>
                    <CardDescription>
                      See how many friends you have referred
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant='link' className='p-0'>
                          View Referral Progress
                        </Button>
                      </DialogTrigger>
                      <DialogContent className='sm:max-w-[425px]'>
                        <DialogHeader>
                          <DialogTitle>Referral Progress</DialogTitle>
                          <DialogDescription>
                            Track your referral rewards
                          </DialogDescription>
                        </DialogHeader>
                        <div className='grid gap-4 py-4'>
                          <div>
                            <div className='flex justify-between mb-2'>
                              <span>Credits Earned</span>
                              <span className='font-semibold'>
                                ${referralProgress.creditsEarned}
                              </span>
                            </div>
                            <Progress
                              value={
                                (referralProgress.creditsEarned /
                                  referralProgress.creditsNeeded) *
                                100
                              }
                              className='w-full'
                            />
                            <p className='text-sm text-gray-500 mt-1'>
                              ${referralProgress.creditsEarned} / $
                              {referralProgress.creditsNeeded} to next reward
                            </p>
                          </div>
                          <p>
                            {referralProgress.friendsReferred} friends referred
                          </p>
                          <Button className='w-full'>
                            Invite More Friends
                          </Button>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </CardContent>
                </Card>
              </div>
              <Card>
                <CardHeader>
                  <CardTitle className='text-lg'>Invite Friends</CardTitle>
                  <CardDescription>
                    Send referral invitations to your friends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className='w-full'>
                    <Mail className='mr-2 h-4 w-4' /> Send Invitations
                  </Button>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value='add-itinerary'>
          <div className='border rounded-lg p-6'>
            <div className='mb-6'>
              <h2 className='text-xl font-semibold'>Add New Itinerary</h2>
              {successmessage && (
                <p className='text-green-900 text-lg font-bold bg-green-200 p-2 mt-4'>
                  {successmessage}
                </p>
              )}
            </div>
            <Button onClick={() => setSelectedItinerary({})}>
              Add Itinerary
            </Button>

            {/* Modal to Add Itinerary */}
            {selectedItinerary && (
              <Dialog
                open={Boolean(selectedItinerary)}
                onOpenChange={setSelectedItinerary}
                className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 '
              >
                <DialogContent className=' bg-white rounded-lg shadow-lg max-h-[100vh] w-full md:w-1/2 overflow-y-auto p-4'>
                  <DialogHeader>
                    <DialogTitle>Create New Itinerary</DialogTitle>
                    <DialogDescription>
                      Fill in the details to create a new itinerary.
                    </DialogDescription>
                  </DialogHeader>

                  {/* Form Content */}
                  <div className='space-y-4 w-full'>
                    {/* Title */}
                    <div>
                      <Label>Title</Label>
                      <input
                        className='block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500'
                        type='text'
                        placeholder='Add Title'
                        name='title'
                        value={formData.title}
                        onChange={handleInputChange}
                      />
                    </div>{' '}
                    {/* destination */}
                    <div>
                      <Label>Destination</Label>
                      <input
                        className='block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500'
                        type='text'
                        placeholder='Add Destination'
                        name='destination'
                        value={formData.destination}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/*Start Date */}
                    <div>
                      <Label>Start Date</Label>
                      <input
                        className='block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500'
                        type='date'
                        placeholder=''
                        name='startDate'
                        value={formData.startDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/*End Date */}
                    <div>
                      <Label>End Date</Label>
                      <input
                        className='block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500'
                        type='date'
                        placeholder=''
                        name='endDate'
                        value={formData.endDate}
                        onChange={handleInputChange}
                      />
                    </div>
                    {/* Purpose of Visit */}
                    <div>
                      <Label>Purpose of Visit</Label>
                      <select
                        className='block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500'
                        value={formData.purpose}
                        onChange={handleInputChange}
                        name='purpose'
                      >
                        <option value='' disabled selected>
                          Select purpose
                        </option>
                        <option value='leisure'>Leisure</option>
                        <option value='business'>Business</option>
                        <option value='other'>Other</option>
                      </select>
                    </div>
                    {/* Duration */}
                    <div>
                      <Label>Duration</Label>
                      <select
                        className='block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500'
                        value={formData.duration}
                        onChange={handleInputChange}
                        name='duration'
                      >
                        <option value='' disabled selected>
                          Select duration
                        </option>
                        <option value='weekend'>Weekend</option>
                        <option value='week'>1 Week</option>
                        <option value='month'>1 Month</option>
                      </select>
                    </div>
                    {/* Interests */}
                    <div>
                      <Label>Interests</Label>
                      <div className='grid grid-cols-2 gap-2'>
                        {[
                          { id: 'music', label: 'Music' },
                          { id: 'sport', label: 'Sport' },
                          { id: 'Food', label: 'Food' },
                          { id: 'art', label: 'Art' },
                          { id: 'nightlife', label: 'Nightlife' },
                          { id: 'history', label: 'History' },
                        ].map(item => (
                          <div key={item.id}>
                            <input
                              type='checkbox'
                              id={item.id}
                              onChange={() =>
                                handleCheckboxChange('interest', item.label)
                              }
                            />
                            <label htmlFor={item.id} className='ml-2'>
                              {item.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Budget Slider */}
                    <div>
                      <Label>Budget (USD)</Label>
                      <div className='flex items-center space-x-4'>
                        <input
                          type='range'
                          min='0'
                          max='5000'
                          step='100'
                          name='budget'
                          value={formData.budget}
                          onChange={handleInputChange}
                          className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600'
                        />
                        <span className='text-sm text-gray-700'>
                          ${formData.budget}
                        </span>
                      </div>
                    </div>
                    {/* Transportation Preferences */}
                    <div>
                      <Label>Transportation Options</Label>
                      <select
                        className='block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500'
                        value={formData.transportation}
                        onChange={handleInputChange}
                        name='transportation'
                      >
                        <option value='' disabled selected>
                          Select Transportation
                        </option>
                        <option value='public'>Public Transportation</option>
                        <option value='ride-sharing'>
                          Ride-sharing (Uber/Lyft)
                        </option>
                        <option value='private'>Private Transportation</option>
                        <option value='car-rental'>Car Rentals</option>
                        <option value='biking'>Biking</option>
                        <option value='walking'>Walking Routes</option>
                      </select>
                    </div>
                    {/* Cuisine Preferences */}
                    <div>
                      <Label>Cuisine Preferences</Label>
                      <select
                        className='block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-indigo-500 focus:border-indigo-500'
                        value={formData.cuisineType}
                        onChange={handleInputChange}
                        name='cuisineType'
                      >
                        <option value='' disabled selected>
                          Select Cuisine
                        </option>
                        <option value='detroit-classics'>
                          Detroit Classics
                        </option>
                        <option value='mexican'>Mexican</option>
                        <option value='italian'>Italian</option>
                        <option value='asian'>Asian</option>
                        <option value='fusion'>Fusion</option>
                        <option value='vegan'>Vegan/Vegetarian</option>
                        <option value='soul-food'>Soul Food</option>
                        <option value='seafood'>Seafood</option>
                        <option value='desserts'>Desserts/Cafes</option>
                      </select>
                    </div>
                    {/* Dining Preferences */}
                    <div>
                      <Label>Dining Preferences</Label>
                      <div className='grid grid-cols-2 gap-2'>
                        {[
                          { id: 'trendy-hotspots', label: 'Trendy Hotspots' },
                          { id: 'family-friendly', label: 'Family-Friendly' },
                          { id: 'street-food', label: 'Street Food' },
                          { id: 'casual-dining', label: 'Casual Dining' },
                          { id: 'budget-friendly', label: 'Budget-friendly' },
                          { id: 'local-favorites', label: 'Local Favorites' },
                          { id: 'fine-dining', label: 'Fine Dining' },
                          { id: 'casual', label: 'Casual' },
                          { id: 'vegetarian', label: 'Vegetarian' },
                          { id: 'local-cuisine', label: 'Local Cuisine' },
                        ].map(item => (
                          <div key={item.id}>
                            <input
                              type='checkbox'
                              id={item.id}
                              onChange={() =>
                                handleCheckboxChange(
                                  'diningPreferences',
                                  item.label
                                )
                              }
                            />
                            <label htmlFor={item.id} className='ml-2'>
                              {item.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Activity Preferences */}
                    <div>
                      <Label>Activity Preferences</Label>
                      <div className='grid grid-cols-2 gap-2'>
                        {[
                          { id: 'sports-events', label: 'Sports Events' },
                          {
                            id: 'family-friendly',
                            label: 'Family-Friendly Experiences',
                          },
                          { id: 'live-concerts', label: 'Live Concerts' },
                          { id: 'relaxation', label: 'Relaxation and Spa' },
                          { id: 'food-tours', label: 'Food Tours' },
                          { id: 'shopping', label: 'Shopping' },
                          {
                            id: 'live-entertainment',
                            label: 'Live Entertainment',
                          },
                          { id: 'sightseeing', label: 'Sightseeing' },
                          { id: 'sporting-events', label: 'Sporting Events' },
                          { id: 'concerts', label: 'Concerts' },
                          { id: 'museums', label: 'Museums' },
                          {
                            id: 'outdoor-adventures',
                            label: 'Outdoor Adventures',
                          },
                          {
                            id: 'Nightlife',
                            label: 'Nightlife',
                          },
                          {
                            id: 'Cultural-Tours',
                            label: 'Cultural Tours',
                          },
                        ].map(item => (
                          <div key={item.id}>
                            <input
                              type='checkbox'
                              id={item.id}
                              onChange={() =>
                                handleCheckboxChange(
                                  'activityPreferences',
                                  item.label
                                )
                              }
                            />
                            <label htmlFor={item.id} className='ml-2'>
                              {item.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Submit Button */}
                    <Button onClick={handleSubmit}>Save Itinerary</Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </TabsContent>{' '}
      </Tabs>
    </div>
  );
}
