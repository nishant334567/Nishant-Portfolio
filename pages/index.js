import React from 'react';
import Card from '../components/card';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-cover bg-no-repeat bg-center" style={{backgroundImage: "url('/background.jpg')"}}>
      <h1 className="text-3xl font-bold mb-8">Hello Nishant Kumar Thakur</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <Card title="About Me" description="Hey I am a 23 years old singer songwriter" />
        <Card title="Contact Us" description="You can reach out to me on my email ID" />
        <Card title="My Music" description="I have released 4 of my original songs" />
      </div>
    </main>
  );
}
