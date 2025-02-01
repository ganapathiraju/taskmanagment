import React from 'react';
import { Link } from 'react-router-dom';
import { UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

const LaunchScreen = () => {
  const quickActions = [
    { name: 'New Task', href: '#' },
    { name: 'New Subtitle Suite', href: '#' },
    { name: 'New Project', href: '#' },
    { name: 'New Subtitling Project', href: '#' },
    { name: 'New Subtitling Series', href: '#' },
  ];

  const navigationItems = [
    { name: 'Commercial Management', href: '/commercial-management' },
    { name: 'CRM', href: '#' },
    { name: 'MAM', href: '#' },
    { name: 'Project Management', href: '#' },
    { name: 'My Tasks', href: '/my-tasks' },
    { name: 'Users', href: '#' },
    { name: 'Groups', href: '#' },
    { name: 'Reports', href: '#' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Launch Screen</h1>
          <div className="flex items-center space-x-4">
            <UserCircleIcon className="h-8 w-8 text-gray-400" />
            <ArrowRightOnRectangleIcon className="h-6 w-6 text-gray-400 cursor-pointer" />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
              {quickActions.map((action) => (
                <Link
                  key={action.name}
                  to={action.href}
                  className="bg-white overflow-hidden shadow rounded-lg p-6 hover:bg-gray-50"
                >
                  <div className="text-lg font-medium text-indigo-600">{action.name}</div>
                </Link>
              ))}
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Navigation</h2>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="bg-white overflow-hidden shadow rounded-lg p-6 hover:bg-gray-50"
                >
                  <div className="text-lg font-medium text-gray-900">{item.name}</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LaunchScreen;
