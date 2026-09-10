// Analytics event dispatch helper for TheGenZ AI Hub

export type TrackingEventType =
  | 'builder_application'
  | 'problem_submission'
  | 'mentor_application'
  | 'partner_inquiry'
  | 'community_join'
  | 'program_interest';

export function trackEvent(eventType: TrackingEventType, metadata?: Record<string, any>) {
  try {
    const payload = {
      event: eventType,
      timestamp: new Date().toISOString(),
      metadata: metadata || {},
      path: typeof window !== 'undefined' ? window.location.pathname : '',
    };
    
    // Store events in sessionStorage for testing / inspection without external vendor lock-in
    if (typeof window !== 'undefined') {
      const existing = JSON.parse(sessionStorage.getItem('thegenz_events') || '[]');
      existing.push(payload);
      sessionStorage.setItem('thegenz_events', JSON.stringify(existing));
      console.log(`[TheGenZ Analytics] Tracked event: ${eventType}`, payload);
    }
  } catch (err) {
    console.warn('[TheGenZ Analytics] Failed to record event', err);
  }
}
