import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the incoming answers from the frontend
    const body = await request.json();
    
    // TODO: Add your custom scoring algorithm here
    console.log("Received data:", body);
    
    const calculatedLeaning = "Moderate Centrist"; 

    // Send the result back to the frontend
    return NextResponse.json({ leaning: calculatedLeaning });
    
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process data' }, { status: 500 });
  }
}