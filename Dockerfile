FROM base as final

ENV NODE_ENV production
USER node

COPY package.json .

# Copy production dependencies from deps stage
COPY --from=deps /usr/src/app/node_modules ./node_modules

# Copy Prisma generated client from build stage (IMPORTANT)
COPY --from=build /usr/src/app/node_modules/.prisma ./node_modules/.prisma

# Copy the built app files
COPY --from=build /usr/src/app/dist ./dist

EXPOSE 5000

CMD ["node", "dist/main.js"]
