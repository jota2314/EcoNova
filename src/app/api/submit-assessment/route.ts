import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      firstName,
      lastName,
      email,
      phone,
      zipCode,
      homeAge,
      message
    } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !phone || !zipCode) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: firstName, lastName, email, phone, zipCode'
      }, { status: 400 });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid email format'
      }, { status: 400 });
    }

    // Phone validation (basic)
    const phoneRegex = /^[\+]?[\s\-\(\)]?[\d\s\-\(\)]{10,}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json({
        success: false,
        error: 'Invalid phone number format'
      }, { status: 400 });
    }

    // Log the submission for debugging (remove in production)
    console.log('📧 New Assessment Form Submission:', {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      zipCode,
      homeAge,
      timestamp: new Date().toISOString()
    });

    // Create structured data for email
    const formData = {
      firstName,
      lastName,
      fullName: `${firstName} ${lastName}`,
      email,
      phone,
      zipCode,
      homeAge: homeAge || 'Not specified',
      message: message || 'No additional message provided',
      submittedAt: new Date().toLocaleString('en-US', {
        timeZone: 'America/New_York',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      source: 'EcoNova Website - No Cost Assessment Form'
    };

    // Return success and let EmailJS handle the email
    return NextResponse.json({
      success: true,
      message: 'Assessment request submitted successfully',
      data: {
        submissionId: `ASS_${Date.now()}`, // Generate unique ID
        timestamp: formData.submittedAt,
        customerName: formData.fullName,
        email: formData.email
      }
    }, { status: 200 });

  } catch (error) {
    console.error('❌ Assessment form submission error:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Internal server error. Please try again or call (781) 732-4817 directly.',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

export async function OPTIONS(request: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}